import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import axios from "axios";

const AppointementList = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(true);

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
          <View style={{ flex: 1, flexDirection: "colmun", paddingTop: 20 }}>
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
                width:380
                // backgroundColor: "#dedede",
                // backgroundColor:"#edeaea",
                // borderRadius: 20,
              }}
            >
                <View style={{flex:1,flexDirection:"colmun",justifyContent:"center",padding:20,backgroundColor:"white",borderRadius:20,width:"100%",height:280}}>
                 <View style={{backgroundColor:"red",width:"100%",height:"50%"}}>
                    <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <View style={{backgroundColor:"blue",height:"100%",width:"70%",flex:1,flexDirection:"column",gap:5}}>
                            <View style={{backgroundColor:"black",widh:"100%",height:"60%",flex:1,flexDirection:"column",gap:5}}>
                                <Text></Text>
                                <Text></Text>
                            </View>
                            <View style={{backgroundColor:"yellow",widh:"100%",height:"30%"}}>

                            </View>
                        </View>
                        <View style={{backgroundColor:"grey",height:"100%",width:"30%"}}>
                           
                        </View>
                    </View>
                 </View>
                 <View style={{backgroundColor:"green",width:"100%",height:"20%",flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                    <View style={{backgroundColor:"red",height:"90%",width:"30%"}} >

                    </View>
                    <View style={{backgroundColor:"red",height:"90%",width:"30%"}} >

                    </View>
                    <View style={{backgroundColor:"red",height:"90%",width:"30%"}} >

                    </View>
                 </View>
                 <View style={{backgroundColor:"yellow",width:"100%",height:"30%",alignItems:"center",justifyContent:"space-around",flex:1,flexDirection:"row"}}>
                        <View style={{backgroundColor:"orange",width:"40%",height:"90%"}}>

                        </View>
                        <View style={{backgroundColor:"orange",width:"40%",height:"90%"}}>

                        </View>
                 </View>
                </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default AppointementList;
