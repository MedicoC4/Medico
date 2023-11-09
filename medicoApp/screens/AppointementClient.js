import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

export default function AppointementClient() {
  const [saveselected, setSaveSelected] = useState("");
  const customStyles = {
    selected: {
      backgroundColor: "blue",
      borderRadius: 5,
    },
    today: {
      color: "green",
    },
    custom: {
      selected: true,
      selectedColor: "blue",
    },
  };

  const handleDateChange = (date) => {
    setSaveSelected(date.dateString);
  };
console.log(saveselected);
  return (
    <View style={styles.container}>
      <Calendar
        current={"2023-11-01"} // Set the initial visible month
        minDate={"2023-11-01"} // Minimum date to be shown
        maxDate={"2023-11-30"} // Maximum date to be shown
        onDayPress={handleDateChange}
        markingType={"custom"}
        markedDates={{
          "2023-11-25": { ...customStyles.custom },
          "2023-11-10": { ...customStyles.custom },
          "2023-11-17": { ...customStyles.custom },
          [saveselected]: { ...customStyles.selected },
        }}
        customStyles={{
          today: customStyles.today,
          selected: customStyles.selected,
          custom: customStyles.custom,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 50,
  },
});