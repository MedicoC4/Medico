import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";

import axios from "axios";
import COLORS from "../constants/colors";
const AppointementList = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [isConfirmedModal, setIsConfirmedModal] = useState(false);
  const [isConfirmedModalSec, setIsConfirmedModalSec] = useState(false);
  const [isRejectedModal, setIsRejectedModal] = useState(false);
  const [isRejectedModalSec, setIsRejectedModalSec] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);

  const [saveData, setSaveData] = useState({
    userName: "",
    day: "",
    hour: "",
    createdDate: "",
    createdHour: "",
  });
  console.log(saveData, "saveData");
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/appointement/getAppointement/pending/${1}`);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching appointments:", error);
  //       throw new Error(error);
  //     }
  //   };
  const fetchAllData = async () => {
    try {
      const response = await axios.get(
        `http://${
          process.env.EXPO_PUBLIC_SERVER_IP
        }:1128/api/appointement/getAllDoc/${1}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      throw new Error(error);
    }
  };

  const updateStatus = async (idH, body) => {
    try {
      const response = await axios.put(
        `http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/update/${idH}`,
        { availability: 1 }
      );
      setRefresh(!refresh);
    } catch (error) {
      throw new Error(error);
    }
  };
  const updateStatusAppointement = async (idAppoint, body) => {
    try {
      const response = await axios.put(
        `http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/appointement/updateAppoint/${idAppoint}`,
        body
      );
      setRefresh(!refresh);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    // fetchData();
    fetchAllData();
  }, [refresh]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80,
      }}
    >
      <Text style={{ paddingBottom: 40, fontSize: 35, fontWeight: "bold" }}>
        Appointmenttt List
      </Text>
      <FlatList
        data={data}
        keyExtractor={(appointment) => String(appointment.id)}
        renderItem={({ item: appointment }) => (
          <View>
            <View style={{ flex: 1, flexDirection: "colmun", paddingTop: 20 }}>
              {/* ////////////////////////////PENDING/////////////////////// */}
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: 15,
                  paddingTop: 15,
                  paddingRight: 15,
                  paddingLeft: 15,
                  width: 380,
                  // backgroundColor: "#dedede",
                  // backgroundColor:"#edeaea",
                  // borderRadius: 20,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "colmun",
                    justifyContent: "center",
                    padding: 20,
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: "100%",
                    height: 280,
                  }}
                >
                  <View style={{ width: "100%", height: "50%" }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          height: "100%",
                          width: "70%",
                          flex: 1,
                          flexDirection: "column",
                          gap: 2,
                        }}
                      >
                        <View
                          style={{
                            widh: "100%",
                            height: "60%",
                            flex: 1,
                            flexDirection: "column",
                            gap: 2,
                          }}
                        >
                          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                            Dr meg grace
                          </Text>
                          <Text
                            style={{
                              color: "#a5a9be",
                              fontSize: 18,
                              fontWeight: "bold",
                            }}
                          >
                            Therapist
                          </Text>
                        </View>
                        <View
                          style={{
                            widh: "100%",
                            height: "30%",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: "#afb2c7",
                              fontSize: 18,
                              fontWeight: "bold",
                            }}
                          >
                            Test test
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          height: "100%",
                          width: "30%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "blue",
                            height: 89,
                            width: 89,
                            borderRadius: 15,
                          }}
                        >
                          <Image />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: 0.5,
                      backgroundColor: "#dedede",
                      borderRadius: 2,
                    }}
                  ></View>
                  <View
                    style={{
                      width: "100%",
                      height: "20%",
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <View
                      style={{
                        height: "90%",
                        width: "40%",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        style={{ height: 20, width: 20 }}
                        source={require("../assets/calendar.png")}
                      />
                      <Text style={{ color: "#adb0c4", fontWeight: "bold" }}>
                        {appointment.Day.day}
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "90%",
                        width: "30%",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        style={{ height: 20, width: 20 }}
                        source={require("../assets/time.png")}
                      />
                      <Text style={{ color: "#adb0c4", fontWeight: "bold" }}>
                        {appointment.Availability.hour}
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "90%",
                        width: "30%",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                        flexDirection: "row",
                      }}
                    >
                      <Badge
                        badgeStyle={{ height: 22, width: 85 }}
                        value={<Text style={{ color: "white" }}>Pending</Text>}
                        status="warning"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: "30%",
                      alignItems: "center",
                      justifyContent: "space-around",
                      flex: 1,
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        width: "40%",
                        height: "90%",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 80,
                        backgroundColor: COLORS.primary,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          setIsConfirmedModal(true);
                          setSaveData({
                            userName: appointment.User.username,
                            day: appointment.Day.day,
                            hour: appointment.Availability.hour,
                            createdDate: new Date(
                              appointment.createdAt
                            ).toLocaleDateString(),
                            createdHour: new Date(
                              appointment.createdAt
                            ).toLocaleTimeString(),
                          });
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 22,
                          }}
                        >
                          Accept
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        width: "40%",
                        height: "90%",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 80,
                        backgroundColor: "white",
                        borderWidth: 2,
                        borderColor: "#f20404",
                        borderStyle: "solid",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          setIsRejectedModal(true);
                          setSaveData({
                            userName: appointment.User.username,
                            day: appointment.Day.day,
                            hour: appointment.Availability.hour,
                            createdDate: new Date(
                              appointment.createdAt
                            ).toLocaleDateString(),
                            createdHour: new Date(
                              appointment.createdAt
                            ).toLocaleTimeString(),
                          });
                        }}
                      >
                        <Text
                          style={{
                            color: "#f20404",
                            fontWeight: "bold",
                            fontSize: 22,
                          }}
                        >
                          Reject
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              {/* //////////////////////////////ACCEPTED////////////////// */}

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: 15,
                  paddingTop: 15,
                  paddingRight: 15,
                  paddingLeft: 15,
                  width: 380,
                  // backgroundColor: "#dedede",
                  // backgroundColor:"#edeaea",
                  // borderRadius: 20,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "colmun",
                    justifyContent: "center",
                    padding: 20,
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: "100%",
                    height: 280,
                  }}
                >
                  <View style={{ width: "100%", height: "50%" }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          height: "100%",
                          width: "70%",
                          flex: 1,
                          flexDirection: "column",
                          gap: 2,
                        }}
                      >
                        <View
                          style={{
                            widh: "100%",
                            height: "60%",
                            flex: 1,
                            flexDirection: "column",
                            gap: 2,
                          }}
                        >
                          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                            Dr meg grace
                          </Text>
                          <Text
                            style={{
                              color: "#a5a9be",
                              fontSize: 18,
                              fontWeight: "bold",
                            }}
                          >
                            Therapist
                          </Text>
                        </View>
                        <View
                          style={{
                            widh: "100%",
                            height: "30%",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: "#afb2c7",
                              fontSize: 18,
                              fontWeight: "bold",
                            }}
                          >
                            Test test
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          height: "100%",
                          width: "30%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "blue",
                            height: 89,
                            width: 89,
                            borderRadius: 15,
                          }}
                        >
                          <Image />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: 0.5,
                      backgroundColor: "#dedede",
                      borderRadius: 2,
                    }}
                  ></View>
                  <View
                    style={{
                      width: "100%",
                      height: "20%",
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <View
                      style={{
                        height: "90%",
                        width: "40%",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        style={{ height: 20, width: 20 }}
                        source={require("../assets/calendar.png")}
                      />
                      <Text style={{ color: "#adb0c4", fontWeight: "bold" }}>
                        {appointment.Day.day}
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "90%",
                        width: "30%",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        style={{ height: 20, width: 20 }}
                        source={require("../assets/time.png")}
                      />
                      <Text style={{ color: "#adb0c4", fontWeight: "bold" }}>
                        {appointment.Availability.hour}
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "90%",
                        width: "30%",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                        flexDirection: "row",
                      }}
                    >
                      <Badge
                        badgeStyle={{ height: 22, width: 85 }}
                        value={<Text style={{ color: "white" }}>Accepted</Text>}
                        status="success"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: "30%",
                      alignItems: "center",
                      justifyContent: "space-around",
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        width: "45%",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 2,
                      }}
                    >
                      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        Accepted At :
                      </Text>
                      <Text style={{ color: "#adb0c4", fontWeight: "bold" }}>
                        {new Date(appointment.updatedAt).toLocaleDateString()}{" "}
                        {new Date(appointment.updatedAt).toLocaleTimeString()}
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        height: "100%",
                        gap: 5,
                      }}
                    >
                      <TouchableOpacity>
                        <Image
                          style={{ width: 48, height: 48 }}
                          source={require("../assets/chat.png")}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          style={{ width: 48, height: 48 }}
                          source={require("../assets/email.png")}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          style={{ width: 48, height: 48 }}
                          source={require("../assets/multiple.png")}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              {/* /////////////////////////////////////REJECTED/////////////////////////////////////////// */}

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: 15,
                  paddingTop: 15,
                  paddingRight: 15,
                  paddingLeft: 15,
                  width: 380,
                  // backgroundColor: "#dedede",
                  // backgroundColor:"#edeaea",
                  // borderRadius: 20,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "colmun",
                    justifyContent: "center",
                    padding: 20,
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: "100%",
                    height: 280,
                  }}
                >
                  <View style={{ width: "100%", height: "50%" }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          height: "100%",
                          width: "70%",
                          flex: 1,
                          flexDirection: "column",
                          gap: 2,
                        }}
                      >
                        <View
                          style={{
                            widh: "100%",
                            height: "60%",
                            flex: 1,
                            flexDirection: "column",
                            gap: 2,
                          }}
                        >
                          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                            Dr meg grace
                          </Text>
                          <Text
                            style={{
                              color: "#a5a9be",
                              fontSize: 18,
                              fontWeight: "bold",
                            }}
                          >
                            Therapist
                          </Text>
                        </View>
                        <View
                          style={{
                            widh: "100%",
                            height: "30%",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: "#afb2c7",
                              fontSize: 18,
                              fontWeight: "bold",
                            }}
                          >
                            Test test
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          height: "100%",
                          width: "30%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "blue",
                            height: 89,
                            width: 89,
                            borderRadius: 15,
                          }}
                        >
                          <Image />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: 0.5,
                      backgroundColor: "#dedede",
                      borderRadius: 2,
                    }}
                  ></View>
                  <View
                    style={{
                      width: "100%",
                      height: "20%",
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <View
                      style={{
                        height: "90%",
                        width: "40%",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        style={{ height: 20, width: 20 }}
                        source={require("../assets/calendar.png")}
                      />
                      <Text style={{ color: "#adb0c4", fontWeight: "bold" }}>
                        {appointment.Day.day}
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "90%",
                        width: "30%",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        style={{ height: 20, width: 20 }}
                        source={require("../assets/time.png")}
                      />
                      <Text style={{ color: "#adb0c4", fontWeight: "bold" }}>
                        {appointment.Availability.hour}
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "90%",
                        width: "30%",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                        flexDirection: "row",
                      }}
                    >
                      <Badge
                        badgeStyle={{ height: 22, width: 85 }}
                        value={<Text style={{ color: "white" }}>Rejected</Text>}
                        status="error"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: "30%",
                      alignItems: "center",
                      justifyContent: "space-around",
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        width: "45%",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 2,
                      }}
                    >
                      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        Rejected At :
                      </Text>
                      <Text style={{ color: "#adb0c4", fontWeight: "bold" }}>
                        {new Date(appointment.updatedAt).toLocaleDateString()}{" "}
                        {new Date(appointment.updatedAt).toLocaleTimeString()}
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        height: "100%",
                        gap: 15,
                      }}
                    >
                      <TouchableOpacity>
                        <Image
                          style={{ width: 48, height: 48 }}
                          source={require("../assets/chat.png")}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          style={{ width: 48, height: 48 }}
                          source={require("../assets/email.png")}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              <Modal
                visible={isConfirmedModal}
                animationType="fade"
                transparent={true}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      Are you sure to confirme the appointement of{" "}
                      {saveData.userName}, on {saveData.day}, at {saveData.hour}
                    </Text>
                    <View style={{ flexDirection: "row", gap: 20 }}>
                      <View
                        style={{
                          width: "45%",
                          backgroundColor: COLORS.primary,
                          height: 30,
                          borderRadius: 50,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            setIsConfirmedModal(false);
                            setIsConfirmedModalSec(true);
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: 20,
                            }}
                          >
                            Confirme
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          width: "45%",
                          backgroundColor: "white",
                          height: 30,
                          borderRadius: 50,
                          justifyContent: "center",
                          alignItems: "center",
                          borderWidth: 2,
                          borderColor: "#f20404",
                          borderStyle: "solid",
                        }}
                      >
                        <TouchableOpacity
                          style={{}}
                          onPress={() => setIsConfirmedModal(false)}
                        >
                          <Text
                            style={{
                              color: "#f20404",
                              fontWeight: "bold",
                              fontSize: 20,
                            }}
                          >
                            Close
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
              <Modal
                visible={isConfirmedModalSec}
                animationType="fade"
                transparent={true}
              >
                <View style={stylesModalSec.modalContainer}>
                  <View style={stylesModalSec.modalContent}>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        paddingTop: 30,
                        gap: 10,
                      }}
                    >
                      <Image
                        style={{ width: 200, height: 200 }}
                        source={require("../assets/coche.png")}
                      />
                      <Text
                        style={{
                          color: "#677294",
                          fontSize: 22,
                          fontWeight: "bold",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        The Appointement is Accepted
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      ></View>
                    </View>
                    <Text
                      style={{
                        color: "#677294",
                        fontSize: 15,
                        fontWeight: "bold",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      You accepted an appointement with {saveData.userName}, on{" "}
                      {saveData.day}, at {saveData.hour}
                    </Text>

                    <View
                      style={{
                        width: "45%",
                        backgroundColor: COLORS.primary,
                        height: 30,
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => setIsConfirmedModalSec(false)}
                        style={{
                          width: "45%",
                          backgroundColor: COLORS.primary,
                          height: 30,
                          borderRadius: 50,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 20,
                          }}
                        >
                          Done
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <Modal
                visible={isRejectedModal}
                animationType="fade"
                transparent={true}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text>
                      You confirmed an appointement with {saveData.userName}, on{" "}
                      {saveData.day}, at {saveData.hour}
                    </Text>
                    <View style={{ flexDirection: "row", gap: 20 }}>
                      <View
                        style={{
                          width: "45%",
                          backgroundColor: COLORS.primary,
                          height: 30,
                          borderRadius: 50,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            setIsRejectedModal(false);
                            setIsRejectedModalSec(true);
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              fontSize: 20,
                            }}
                          >
                            Reject
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          width: "45%",
                          backgroundColor: "white",
                          height: 30,
                          borderRadius: 50,
                          justifyContent: "center",
                          alignItems: "center",
                          borderWidth: 2,
                          borderColor: "#f20404",
                          borderStyle: "solid",
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => setIsRejectedModal(false)}
                        >
                          <Text
                            style={{
                              color: "#f20404",
                              fontWeight: "bold",
                              fontSize: 20,
                            }}
                          >
                            Close
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
              <Modal
                visible={isRejectedModalSec}
                animationType="fade"
                transparent={true}
              >
                <View style={stylesModalSec.modalContainer}>
                  <View style={stylesModalSec.modalContent}>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Image
                        style={{ width: 250, height: 250 }}
                        source={require("../assets/marqueX.png")}
                      />
                      {/* <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}> */}
                      <Text
                        style={{
                          color: "#677294",
                          fontSize: 22,
                          fontWeight: "bold",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Your Appointement is Rejected
                      </Text>
                      {/* </View> */}
                    </View>
                    <Text
                      style={{
                        color: "#677294",
                        fontSize: 15,
                        fontWeight: "bold",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      You rejected an appointement with {saveData.userName}, on{" "}
                      {saveData.day}, at {saveData.hour}
                    </Text>

                    <View
                      style={{
                        width: "45%",
                        backgroundColor: COLORS.primary,
                        height: 30,
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => setIsRejectedModalSec(false)}
                        style={{
                          width: "45%",
                          backgroundColor: COLORS.primary,
                          height: 30,
                          borderRadius: 50,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 20,
                          }}
                        >
                          Done
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <Modal
                animationType="fade"
                transparent={true}
                visible={sendEmail}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalText}>
                      Your Email Content Goes Here
                    </Text>

                    <TouchableOpacity
                      onPress={()=>setSendEmail(false)}
                      style={styles.modalButton}
                    >
                      <Text style={styles.buttonText}>Close Modal</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        )}
      />
      {/* ///////////////////////////////////MODALS//////////////////////////////////////////// */}
    </View>
  );
};
const stylesModalSec = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: 300,
    height: 520,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: 300,
    height: 200,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default AppointementList;
