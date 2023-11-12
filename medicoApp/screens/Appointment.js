import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, Alert } from "react-native";
import { Calendar } from "react-native-calendars";
import axios from "axios";

export default function DateSelection() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [docDate, setDocDate] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDayId, setSelectedDayId] = useState(null);
  const currentDate = new Date().toISOString().split("T")[0];

  const addAppointment = async () => {
    // Filter out the dates that have already been added
    const newDates = selectedDates.filter((date) => !docDate.map((day) => day.day).includes(date));

    if (newDates.length > 0) {
      // Add new dates to the database
      const data = newDates.map((date) => ({ day: date }));
      try {
        await axios.post(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/day/1`, data);
        // Fetch all dates again to ensure consistency
        const updatedData = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/${1}`);
        setDocDate(updatedData.data.Days);
        // Clear the selectedDates state
        setSelectedDates([]);
      } catch (error) {
        console.error("Error adding appointments:", error);
        throw new Error(error);
      }
    }
  };

  const deleteDay = async (DayId) => {
    try {
      const delFromAppoint = await axios.delete(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/appointement/delete/${DayId}`);
      const delFromAvailabilyty = await axios.delete(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/delete/${DayId}`);
      const del = await axios.delete(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/day/delete/${DayId}`);
      setRefresh(!refresh);
      setModalVisible(false); 
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleDateChange = (date) => {
    const dateString = date.dateString;
    if (dateString >= currentDate) {
      const dayId = docDate.find((day) => day.day === dateString)?.id;
      if (dayId) {
        // Show the modal to confirm deletion
        setSelectedDayId(dayId);
        setModalVisible(true);
      } else {
        // Check if the date is already selected
        if (!selectedDates.includes(dateString)) {
          setSelectedDates((prevSelectedDates) => [...prevSelectedDates, dateString]);
        } else {
          // Date is already selected, remove it from the list
          setSelectedDates((prevSelectedDates) => prevSelectedDates.filter((d) => d !== dateString));
        }
      }
    }
  };

  useEffect(() => {
    const getAllDates = async () => {
      try {
        const data = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/${1}`);
        setDocDate(data.data.Days);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        throw new Error(error);
      }
    };

    getAllDates();
  }, [selectedDates, refresh]);

  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Calendar
        onDayPress={handleDateChange}
        markedDates={{
          ...docDate.reduce((acc, date) => ({ ...acc, [date.day]: { selected: true, marked: true } }), {}),
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

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, elevation: 5 }}>
            <Text>Are you sure to delete the availability for this day?</Text>
            <TouchableOpacity
              onPress={() => {
                deleteDay(selectedDayId);
              }}
              style={{ backgroundColor: "red", padding: 10, borderRadius: 5, marginTop: 10,alignItems:"center",justifyContent:"center" }}
            >
              <Text style={{ color: "white" }}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              style={{ backgroundColor: "gray", padding: 10, borderRadius: 5, marginTop: 10,alignItems:"center",justifyContent:"center" }}
            >
              <Text style={{ color: "white" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
