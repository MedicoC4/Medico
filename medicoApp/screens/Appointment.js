import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    setOpen(false);
  };

  const handleBookAppointment = () => {
    if (selectedDate) {
      // Handle the logic for booking the appointment using the selectedDate.
      // You can make an API call to book the appointment here.
      console.log("Selected date and time:", selectedDate);
    } else {
      // Handle the case where a date and time have not been selected.
      console.log("Please select a date and time for the appointment.");
    }
  };

  return (
    <View>
      <Button title="Select Date and Time" onPress={() => setOpen(true)} />
      {selectedDate && <Text>Selected Date and Time: {selectedDate.toString()}</Text>}

      <Button title="Book Appointment" onPress={handleBookAppointment} />

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={handleDateChange}
        onCancel={() => setOpen(false)}
      />
    </View>
  );
};

export default Appointment;
