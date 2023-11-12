import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import axios from "axios";
import Carousel from "react-native-snap-carousel";

export default function AppointementClient() {
  const [selectedDate, setSelectedDate] = useState({ dateString: "", dayId: "" });
  const [availability, setAvailability] = useState([]);
  const [hours, setHours] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [hourId, setHourId] = useState(0);
  const [dayId, setDayId] = useState(0);
  const [includes, setIncludes] = useState(0);
  const currentDate = new Date().toISOString().split("T")[0];

  const getHours = async (idDay) => {
    try {
      const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/hours/0/${idDay}`);
      setHours(response.data);
    } catch (error) {
      console.error("Error fetching availability:", error);
      throw new Error(error);
    }
  };

  const getAvailability = async () => {
    try {
      const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/${1}`);
      setAvailability(response.data.Days);
      setIncludes(response.data);
    } catch (error) {
      console.error("Error fetching availability:", error);
      throw new Error(error);
    }
  };

  const updateStatus = async (idH, body) => {
    try {
      await axios.put(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/update/${idH}`, body);
      setRefresh(!refresh);
    } catch (error) {
      throw new Error(error);
    }
  };

  const postAppointment = async () => {
    try {
      await axios.post(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/appointement/add/`, {
        DoctorId: includes.id,
        UserId: 1,
        AvailabilityId: hourId,
        DayId: dayId
      });
      setRefresh(!refresh);
    } catch (error) {
      throw new Error(error);
    }
  };

  const customStyles = {
    selected: {
      selectedColor: "blue",
      borderRadius: 5,
    },
    today: {
      color: "green",
    },
    custom: {
      selected: true,
      selectedColor: "#09d2a2",
      dotColor:"white"
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
      setDayId(selectedDayObj.id);
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

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => setHourId(item.id)} key={index}>
      <View
        style={[
          styles.carouselItem,
          item.id === hourId ? styles.selectedCarouselItem : null,
        ]}
      >
        <Text
          style={{
            color: item.id === hourId ? "#fff" : "#0ebe7f",
            fontSize: item.id === hourId ? 18 : 16,
            transform: [{ scale: item.id === hourId ? 1.7 : 1.5 }],
          }}
        >
          {item.hour}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Appointment</Text>
      </View>
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
      <View style={styles.detailsContainer}>
        <Text style={styles.dateText}>{selectedDate.dateString}</Text>
        <Carousel
          data={hours}
          renderItem={renderItem}
          sliderWidth={350}
          itemWidth={130} // Increase item width for a larger item
          layout={"default"}
          loop={true}
          containerCustomStyle={styles.carouselContainer}
        />
        <TouchableOpacity onPress={postAppointment} style={styles.confirmButton}>
          <Text style={styles.confirmText}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
  },
  detailsContainer: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor:"white",
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    height:420
  },
  dateText: {
    fontSize: 20,
    marginBottom: 10,
  },
  carouselContainer: {
    marginTop: 10,
  },
  carouselItem: {
    width: 120, // Increase width for a larger item
    height: 120, // Increase height for a larger item
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    shadowColor: "rgba(3, 3, 3, 8)", // Increase shadow opacity
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    backgroundColor: "#ecfaf5",
    marginHorizontal: 5,
    color:"#09d09e"
  },
  selectedCarouselItem: {
    backgroundColor: "#0ebe7f",
  },
  confirmButton: {
    backgroundColor: "#0ebe7f",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width:"80%",
    height:50,
    justifyContent:"center",
    alignItems: "center", 
  },
  confirmText: {
    color: "#fff",
    textAlign: "center",
  },
});
