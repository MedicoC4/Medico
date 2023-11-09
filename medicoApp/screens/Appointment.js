import React, { useState,useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import axios from 'axios'


export default function DateSelection() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [unselectedDates, setUnselectedDates] = useState([]);
  const [docDate, setDocDate] = useState([]);
  const currentDate = new Date().toISOString().split("T")[0];
  // console.log(selectedDates);
console.log("unsrfghjklmùelect",unselectedDates);
  const addAppointment = async (docId) => {
    const data =selectedDates.map((date) =>{
      return {
        day:date
      }
    })
    try {
   
      
      await axios.post(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/day/${docId}`,data);
    } catch (error) {
      console.error("Error adding appointments:", error);
      throw new Error(error);
    }
  };
useEffect(()=>{
  const getAllDates = async () => {
    try {
     
        
     const data= await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/${1}`);
     setDocDate(data.data.Days.map((day)=>day.day));
     
     setSelectedDates(data.data.Days.map((day)=>day.day)); //

     console.log("data",data.data.Days);
    } catch (error) {
      console.error("Error adding appointments:", error);
      throw new Error(error);
    }
    
  }
  getAllDates()
},[])
console.log(docDate,"docDate");
  const handleDateChange = (date) => {
    const dateString = date.dateString;
    let unselected=[...unselectedDates]
    unselected=[...new Set(unselected)]
    const updatedSelectedDates = [...selectedDates];

    // if(unselected.includes(dateString)){
    //   unselected.splice(unselected.indexOf(dateString), 1);
    //   updatedSelectedDates.splice(updatedSelectedDates.indexOf(dateString), 1);

    // }
    if (dateString >= currentDate) {
      if(docDate.includes(dateString)) {
  
         unselected.push(dateString)
        }

     
      if (updatedSelectedDates.includes(dateString)) {
        updatedSelectedDates.splice(updatedSelectedDates.indexOf(dateString), 1);
      } 
      
      else {
        updatedSelectedDates.push(dateString);
      }

      setSelectedDates(updatedSelectedDates);
    }
    if(updatedSelectedDates.includes(dateString)&&unselected.includes(dateString)){
      unselected.splice(unselected.indexOf(dateString), 1);

    }
    setUnselectedDates(unselected)
  };



  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Calendar onDayPress={handleDateChange} markedDates={selectedDates.reduce((acc, date) => ({ ...acc, [date]: { selected: true, marked: true } }), {})}/>

      <Text>Selected Dates:</Text>
      <TouchableOpacity onPress={() => setSelectedDates([])}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addAppointment(1)}>
        <Text>Create</Text>
      </TouchableOpacity>
      {selectedDates.map((date, index) => (
        <Text key={index}>{date}</Text>
      ))}
    </View>
  );
}
