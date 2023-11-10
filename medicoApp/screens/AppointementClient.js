import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import axios from "axios";

export default function AppointementClient() {
  const [selectedDate, setSelectedDate] = useState({ dateString: "", dayId: "" });
  const [availability, setAvailability] = useState([]);
  const [hours, setHours] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [hourId, setHourId] = useState(0);
  const [dayId, setDayId] = useState(0);
  const [includes, setIncludes] = useState(0);
  const currentDate = new Date().toISOString().split("T")[0];

  console.log("thisssssssssssssssssssssssss",includes.id);
  // console.log("houuuuuuuuuuuuuuuuuuuuuuuuuurs",hours);

  const getHours = async (idDay) => {
    try {
      const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/hours/0/${idDay}`);
      setHours(response.data);
      console.log("daaaaaaaaaaaaaaaaaaaaaaaaaattttttttttttttttttt",response.data);
    } catch (error) {
      console.error("Error fetching availability:", error);
      throw new Error(error);
    }
  };

  const getAvailability = async () => {
    try {
      const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/${1}`);
      setAvailability(response.data.Days);
      setIncludes(response.data)
    } catch (error) {
      console.error("Error fetching availability:", error);
      throw new Error(error);
    }
  };
  const updateStatus = async (idH,body) => {
   try {
    const response = await axios.put(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/update/${idH}`,body)
    setRefresh(!refresh)
   } catch (error) {
    throw new Error(error)
   }
  }
  
  const postAppointment = async (body) => {
   try {
    const response = await axios.post(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/appointement/add/`,{
      DoctorId:includes.id,
      UserId:1,
      AvailabilityId:hourId,
      DayId:dayId
    })
    setRefresh(!refresh)
   } catch (error) {
    throw new Error(error)
   }
  }
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
    const selectedDayObj = availability.find((dayObj) => dayObj.day === date.dateString);
    if (selectedDayObj) {
      setSelectedDate({
        dateString: date.dateString,
        dayId: selectedDayObj.id,
      });
      getHours(selectedDayObj.id);
      setDayId(selectedDayObj.id)
    }
  };

  const extractMarkedDates = () => {
    const markedDates = {};
    availability.forEach((dayObj) => {
      markedDates[dayObj.day] = { ...customStyles.custom };
    });
    return markedDates;
  };

  useEffect(() => {
    getAvailability();
  }, [refresh]);

  console.log(selectedDate);
  return (
    <View style={styles.container}>
      <Calendar
        current={currentDate}
        minDate={currentDate}
        onDayPress={handleDateChange}
        markingType={"custom"}
        markedDates={{
          ...extractMarkedDates(),
          [selectedDate.dateString]: { ...customStyles.selected },
        }}
        customStyles={{
          today: customStyles.today,
          selected: customStyles.selected,
          custom: customStyles.custom,
        }}
      />
      <View>
        {hours.map((e) => (
          <TouchableOpacity onPress={()=>setHourId(e.id)} key={e.id}>
            <Text>{e.hour}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={()=>postAppointment()}><Text>CONFIRME</Text></TouchableOpacity>
      </View>
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
