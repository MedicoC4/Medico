import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'


import axios from "axios";
import COLORS from "../constants/colors";

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
                width:380
                // backgroundColor: "#dedede",
                // backgroundColor:"#edeaea",
                // borderRadius: 20,
              }}
            >
                <View style={{flex:1,flexDirection:"colmun",justifyContent:"center",padding:20,backgroundColor:"white",borderRadius:20,width:"100%",height:280}}>
                 <View style={{width:"100%",height:"50%"}}>
                    <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <View style={{height:"100%",width:"70%",flex:1,flexDirection:"column",gap:2}}>
                            <View style={{widh:"100%",height:"60%",flex:1,flexDirection:"column",gap:2}}>
                                <Text style={{fontSize:25,fontWeight:"bold"}}>Dr meg grace</Text>
                                <Text style={{color:"#a5a9be",fontSize:18,fontWeight:"bold"}}>Therapist</Text>
                            </View>
                            <View style={{widh:"100%",height:"30%",justifyContent:"center"}}>
                                <Text style={{color:"#afb2c7",fontSize:18,fontWeight:"bold"}}>Test test</Text>
                            </View>
                        </View>
                        <View style={{height:"100%",width:"30%",justifyContent:"center",alignItems:"center"}}>
                           <View style={{backgroundColor:"blue",height:89,width:89,borderRadius:15}}>
                            <Image/>
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
                 <View style={{width:"100%",height:"20%",flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                    <View style={{height:"90%",width:"40%",justifyContent:"center",alignItems:"center",gap:5,flexDirection:"row"}} >
                        <Image style={{height:20,width:20}} source={require("../assets/calendar.png")}/>
                        <Text style={{color:"#adb0c4",fontWeight:"bold"}}>{appointment.Day.day}</Text>
                    </View>
                    <View style={{height:"90%",width:"30%",justifyContent:"center",alignItems:"center",gap:5,flexDirection:"row"}} >
                        <Image style={{height:20,width:20}} source={require("../assets/time.png")}/>
                        <Text style={{color:"#adb0c4",fontWeight:"bold"}}>{appointment.Availability.hour}</Text>
                    </View>
                    <View style={{height:"90%",width:"30%",justifyContent:"center",alignItems:"center",gap:5,flexDirection:"row"}} >
                    <Badge badgeStyle={{ height:22, width:85 }} value={<Text style={{ color: 'white' }}>Pending</Text>} status="warning" />
                    </View>
                    
                   
                 </View>
                 <View style={{width:"100%",height:"30%",alignItems:"center",justifyContent:"space-around",flex:1,flexDirection:"row"}}>
                        <View style={{width:"40%",height:"90%",justifyContent:"center",alignItems:"center",borderRadius:80,backgroundColor:COLORS.primary}}>
                            <TouchableOpacity><Text style={{color:"white",fontWeight:"bold",fontSize:22}}>Accept</Text></TouchableOpacity>
                        </View>
                        <View style={{width:"40%",height:"90%",justifyContent:"center",alignItems:"center",borderRadius:80,backgroundColor:"white",borderWidth:2,borderColor:"#f20404",borderStyle:"solid"}}>
                            <TouchableOpacity><Text style={{color:"#f20404",fontWeight:"bold",fontSize:22}}>Reject</Text></TouchableOpacity>
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
                width:380
                // backgroundColor: "#dedede",
                // backgroundColor:"#edeaea",
                // borderRadius: 20,
              }}
            >
                <View style={{flex:1,flexDirection:"colmun",justifyContent:"center",padding:20,backgroundColor:"white",borderRadius:20,width:"100%",height:280}}>
                 <View style={{width:"100%",height:"50%"}}>
                    <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <View style={{height:"100%",width:"70%",flex:1,flexDirection:"column",gap:2}}>
                            <View style={{widh:"100%",height:"60%",flex:1,flexDirection:"column",gap:2}}>
                                <Text style={{fontSize:25,fontWeight:"bold"}}>Dr meg grace</Text>
                                <Text style={{color:"#a5a9be",fontSize:18,fontWeight:"bold"}}>Therapist</Text>
                            </View>
                            <View style={{widh:"100%",height:"30%",justifyContent:"center"}}>
                                <Text style={{color:"#afb2c7",fontSize:18,fontWeight:"bold"}}>Test test</Text>
                            </View>
                        </View>
                        <View style={{height:"100%",width:"30%",justifyContent:"center",alignItems:"center"}}>
                           <View style={{backgroundColor:"blue",height:89,width:89,borderRadius:15}}>
                            <Image/>
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
                 <View style={{width:"100%",height:"20%",flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                    <View style={{height:"90%",width:"40%",justifyContent:"center",alignItems:"center",gap:5,flexDirection:"row"}} >
                        <Image style={{height:20,width:20}} source={require("../assets/calendar.png")}/>
                        <Text style={{color:"#adb0c4",fontWeight:"bold"}}>{appointment.Day.day}</Text>
                    </View>
                    <View style={{height:"90%",width:"30%",justifyContent:"center",alignItems:"center",gap:5,flexDirection:"row"}} >
                        <Image style={{height:20,width:20}} source={require("../assets/time.png")}/>
                        <Text style={{color:"#adb0c4",fontWeight:"bold"}}>{appointment.Availability.hour}</Text>
                    </View>
                    <View style={{height:"90%",width:"30%",justifyContent:"center",alignItems:"center",gap:5,flexDirection:"row"}} >
                    <Badge badgeStyle={{ height:22, width:85 }} value={<Text style={{ color: 'white' }}>Accepted</Text>} status="success" />
                    </View>
                    
                   
                 </View>
                 <View style={{width:"100%",height:"30%",alignItems:"center",justifyContent:"space-around",flexDirection:"row",backgroundColor:"yellow"}}>
                        <View style={{width:"50%",backgroundColor:"red"}}>
                            <Text>Accepted At:{new Date(appointment.updatedAt).toLocaleDateString()} {new Date(appointment.updatedAt).toLocaleTimeString()}</Text>
                        </View>
                        <View style={{justifyContent:"space-between",flexDirection:"row",flex:1,width:"40%",backgroundColor:"grey"}}>
                            <View style={{height:20,width:20}}>
                                <Image source={require("../assets/chat.png")}/>
                            </View>
                            <View style={{height:20,width:20}}>
                                <Image source={require("../assets/email.png")}/>
                            </View>
                            <View style={{height:20,width:20}}>
                                <Image source={require("../assets/multiple.png")}/>
                            </View>
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
