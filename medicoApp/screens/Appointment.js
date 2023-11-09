import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";

export default function DateSelection() {
  const [selectedDates, setSelectedDates] = useState({});

  const handleDateChange = (date) => {
    const dateString = date.dateString;

    // Clone the selectedDates object to avoid mutating state directly
    const updatedSelectedDates = { ...selectedDates };

    // Toggle the selection of the date
    updatedSelectedDates[dateString] = {
      selected: !selectedDates[dateString]?.selected,
      marked: true,
    };

    setSelectedDates(updatedSelectedDates);
  };
console.log(selectedDates);
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Calendar
        onDayPress={handleDateChange}
        markedDates={selectedDates}
      />

      {/* <TouchableOpacity onPress={()=>setSelectedDates({})}><Text>Reset</Text></TouchableOpacity> */}
      <Text>Selected Dates:</Text>
      {Object.keys(selectedDates).map((dateString, index) => (
        <Text key={index}>{dateString}</Text>
      ))}
    </View>
  );
}








