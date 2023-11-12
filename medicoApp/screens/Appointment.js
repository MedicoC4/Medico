import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import axios from "axios";

export default function DateSelection() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [docDate, setDocDate] = useState([]);

  const currentDate = new Date().toISOString().split("T")[0];

  const addAppointment = async () => {
    // Filter out the dates that have already been added
    const newDates = selectedDates.filter((date) => !docDate.includes(date));

    if (newDates.length > 0) {
      // Add new dates to the database
      const data = newDates.map((date) => ({ day: date }));
      try {
        await axios.post(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/day/1`, data);
        // Fetch all dates again to ensure consistency
        const updatedData = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/${1}`);
        setDocDate(updatedData.data.Days.map((day) => day.day));
        // Clear the selectedDates state
        setSelectedDates([]);
      } catch (error) {
        console.error("Error adding appointments:", error);
        throw new Error(error);
      }
    }
  };
  const deleteDay = async(DayId)=>{
    try {
      const del = await axios.delete(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/day/delete/${DayId}`)
      const delFromAppoint = await axios.delete(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/appointement/delete/${DayId}`)
      const delFromAvailabilyty = await axios.delete(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/delete/${DayId}`)
    } catch (error) {
      throw new Error(error)
    }
  }


  useEffect(() => {
    const getAllDates = async () => {
      try {
        const data = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/${1}`);
        setDocDate(data.data.Days.map((day) => day.day));
      } catch (error) {
        console.error("Error adding appointments:", error);
        throw new Error(error);
      }
    };

    getAllDates();
  }, [selectedDates]);

  const handleDateChange = (date) => {
    const dateString = date.dateString;
    if (dateString >= currentDate) {
      // Check if the date is already selected
      if (!selectedDates.includes(dateString)) {
        setSelectedDates((prevSelectedDates) => [...prevSelectedDates, dateString]);
      } else {
        // Date is already selected, remove it from the list
        setSelectedDates((prevSelectedDates) => prevSelectedDates.filter((d) => d !== dateString));
      }
    }
  };

  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Calendar
        onDayPress={handleDateChange}
        markedDates={{
          ...docDate.reduce((acc, date) => ({ ...acc, [date]: { selected: true, marked: true } }), {}),
          ...selectedDates.reduce((acc, date) => ({ ...acc, [date]: { selected: true, marked: true } }), {}),
        }}
      />

      <Text>Selected Dates:</Text>
      <TouchableOpacity onPress={() => setSelectedDates([])}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={addAppointment}>
        <Text>Create</Text>
      </TouchableOpacity>
      {selectedDates.map((date, index) => (
        <Text key={index}>{date}</Text>
      ))}
    </View>
  );
}
