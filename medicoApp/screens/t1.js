// import BodyParser from "body-parser"
// const express = require('express');
// require('dotenv').config()
// const PaymentRouter = require('./routes/payment.route.js')
// const UserRouter = require('./routes/user.route.js')
// const DoctorRouter = require('./routes/doctor.route.js')
// const specialityRoute = require('./routes/specialities.js')
// const OrdersRouter = require('./routes/orders.route.js')
// const DayRouter = require('./routes/day.router.js')
// const PharmacyRouter = require('./routes/pharmacy.route.js')
// const ProductRouter = require('./routes/product.route.js')
// const AppointementRouter = require('./routes/appointement.route.js')
// const AppointementListRouter = require('./routes/appointementList.route.js')
// const ReviewRouter = require('./routes/reviews.route.js')
// const NodemailerRoute = require('./routes/nodemailer.route.js')
// const Categories = require('./routes/categories.route.js')
// require('colors');
// const RecordsRouter = require('./routes/records.route.js')
// const morgan = require('morgan')
// const cors = require('cors')
// const app = express();   
// const port = 1128; 
// const http = require("http");
// const server = http.createServer(app);
// const { Expo } = require("expo-server-sdk");
// const expo = new Expo();
// const dotenv = require("dotenv");
// const bodyparser = require("body-parser");
// const socketIo = require("socket.io");


// app.post("/register")
// app.use(express.json());
// require("./database/index.js")
// const swaggerUi = require('swagger-ui-express');
// app.use(
//   morgan((tokens, req, res) => {
//     const method = tokens.method(req, res);
//     const status = tokens.status(req, res);
//     const coloredMethod =
//       method === 'GET'
//         ? method.green
//         : method === 'POST'
//         ? method.blue
//         : method === 'PUT'
//         ? method.yellow
//         : method === 'DELETE'
//         ? method.red
//         : method;

//     return [
//       coloredMethod,
//       tokens.url(req, res),
//       status.brightYellow,
//       tokens.res(req, res, 'content-length'),
//       '-',
//       tokens['response-time'](req, res),
//       'ms',
//     ].join(' ');
//   })
// );


// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(null, { swaggerOptions: { url: '/swagger.json' } }));

// app.use(express.json());
// app.use(cors())

// app.use('/api/user', UserRouter)
// app.use('/api/doctor', DoctorRouter)
// app.use('/api/specialities', specialityRoute)
// app.use('/api/Product', ProductRouter)
// app.use('/api/orders', OrdersRouter)
// app.use('/api/day', DayRouter)
// app.use('/api/pharmacy',PharmacyRouter)
// app.use('/api/product',ProductRouter)
// app.use('/api/aivability',AppointementRouter)
// app.use('/api/appointement',AppointementListRouter)
// app.use('/api/records',RecordsRouter)
// app.use('/api/payment', PaymentRouter)
// app.use('/api/reviews', ReviewRouter)
// app.use('/api/category',Categories)
// app.use('/api/email', NodemailerRoute)

// const acceptServiceNotification = async (receiver, message) => {
//   const messages = [
//     {
//       to: receiver.expoPushToken,
//       sound: "default",
//       title: `Service Accepted": ${message}`,
//       body: "Service request accepted",
//     },
//   ];
//   try {
//     await expo.sendPushNotificationsAsync(messages);
//     console.log("Notification sent successfully");
//   } catch (error) {
//     console.error("Error sending notification:", error);
//   }
// }

// const rejectServiceNotification = async (receiver, message) => {
//   const messages = [
//     {
//       to: receiver.expoPushToken,
//       sound: "default",
//       title: `Service Rejected: ${message}`,
//       body: "Service request rejected",
//     },
//   ];
//   try {
//     await expo.sendPushNotificationsAsync(messages);
//     console.log("Notification sent successfully");
//   } catch (error) {
//     console.error("Error sending notification:", error);
//   }
// };
// const io = socketIo(server, {
//   cors: {
//     origin: `http://${process.env.EXPO_PUBLIC_SERVER_IP}:8081`,
//     methods: ["GET", "POST"],
//   },
// });

// const onlineUsers = [];
// console.log(onlineUsers, "onlineUser");
// io.on("connection", (socket) => {
//   console.log(`User connected: ${socket.id}`);

//   socket.on("login", ({ userId }) => {
//     // Add the user to the onlineUsers array
//     onlineUsers.push({ userId, socketId: socket.id });
//     console.log("we are in", onlineUsers);
//   });

//   socket.on("acceptService", ({ message, receiverId }) => {
//     console.log(receiverId, "receiver");
//     const receiver = onlineUsers.find((user) => user.userId === receiverId);
//     console.log(onlineUsers, "receiver");
//     if (receiver) {
//       io.to(receiver.socketId).emit("receive-notification", {
//         title: "Booking Accepted",
//         message: `Booking request accepted for the car: ${message}`,
//       });
//       acceptServiceNotification(receiver, message);
//       console.log("service accept", receiver);
//     } else {
//       console.log(`User with UserId ${receiverId} not found or offline.`);
//     }
//   });

// socket.on("rejectService", ({ senderId, receiverId, message }) => {
//     const receiver = onlineUsers.find((user) => user.userId === receiverId);
//     if (receiver) {
//       io.to(receiver.socketId).emit("receive-notification", {
//         title: "Booking Rejected",
//         message: `Your Booking request rejected for the car: ${message}`,
//       });
//       rejectServiceNotification(receiver, message);
//       console.log("service reject", receiver);
//     } else {
//       console.log(`User with UserId ${receiverId} not found or offline.`);
//     }
//   });

// socket.on("disconnect", () => {
//     console.log(`User disconnected: ${socket.id}`);
//     // Remove the disconnected user from the onlineUsers array
//     const disconnectedUserIndex = onlineUsers.findIndex(
//       (user) => user.socketId === socket.id
//     );
//     if (disconnectedUserIndex !== -1) {
//       const disconnectedUser = onlineUsers.splice(disconnectedUserIndex, 1)[0];
//       console.log(`User with UserId ${disconnectedUser.userId} disconnected.`);
//     }
//   });
// });



// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// ///////////////////////////////////////////////////
// import React, { useEffect, useState,useRef } from "react";
// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Modal,
//   Button,
//   Dimensions,
//   TextInput
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";

// import { Ionicons } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
// // import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
// const { width, height } = Dimensions.get("window");
// import { auth } from "../firebase-config";
// import * as Animatable from 'react-native-animatable';
// import { useDispatch, useSelector } from "react-redux";
// import { saveMap } from '../redux/doctorSlicer';
// import { useNavigation } from '@react-navigation/native';
// import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
// import io from "socket.io-client";
// import PushNotification from "react-native-push-notification";

// import axios from "axios";
// import COLORS from "../constants/colors";
// import { firebase } from "@react-native-firebase/database";
// import AnimatedLottieView from "lottie-react-native";
// const AppointementList = () => {
//   const [data, setData] = useState([]);
//   const [refresh, setRefresh] = useState(true);
//   const [isConfirmedModal, setIsConfirmedModal] = useState(false);
//   const [isConfirmedModalSec, setIsConfirmedModalSec] = useState(false);
//   const [isRejectedModal, setIsRejectedModal] = useState(false);
//   const [isRejectedModalSec, setIsRejectedModalSec] = useState(false);
//   const [sendEmail, setSendEmail] = useState(false);
//   const [idOfHour, setIdOfHour] = useState(0);
//   const [idOfAppoint, setIdOfAppoint] = useState(0);
//   const [btnFilterModal, setBtnFilterModal] = useState(false);
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const [estimatedDuration, setEstimatedDuration] = useState(null);
//   const [isDistance, setIsDistance] = useState(null);
//   const [text, setText] = useState('');

//   const navigation = useNavigation()
  
//   const [oneUser,setOneUser]=useState({
//     longitude:0,
//     latitude:0,
//     id:0
//   })
//   const dropdownRef = useRef(null);
//   const [mapModalVisible, setMapModalVisible] = useState(false);
  
//   const [saveData, setSaveData] = useState({
//     userName: "",
//     day: "",
//     hour: "",
//     createdDate: "",
//     createdHour: "",
//   });

//   const socket = io(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/`);


//   console.log("==================>");
//   const dispatch = useDispatch();

//   const handleTextChange = (inputText) => {
//     setText(inputText);
//   };

//   const showMapModal = () => {
//     setMapModalVisible(true);
//   };

//   const hideMapModal = () => {
//     setMapModalVisible(false);
//   };
//   const userToMap=(lat,long,idUser,userName,docName)=>{
//     dispatch(saveMap({longitude:long,latitude:lat,id:idUser,name:userName,dotorName:docName}))
//   }

//  const sendMail =()=>{
//   try {
//     const send = (`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/email/sendAccept`,{})
//   } catch (error) {
//     throw new Error(error)
//   }
//  }

//   const toggleDropdown = () => {
//     if (isDropdownVisible) {
//       dropdownRef.current.fadeOutLeftBig(900).then(() => {
//         setDropdownVisible(false);
//       });
//     } else {
//       setDropdownVisible(true);
//       dropdownRef.current.slideInLeft(900).then(() => {
//         setDropdownVisible(true);
//       });
//     }
//   };

//   const getTime = async (docLat, docLong, desLat, desLong) => {
//     try {
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/directions/json?origin=${docLat},${docLong}&destination=${desLat},${desLong}&key=AIzaSyA6k67mLz5qFbAOpq2zx1GBX9gXqNBeS-Y`
//       );
//       const data = await response.json();
  
//       if (data.status === "OK" && data.routes.length > 0 && data.routes[0].legs.length > 0) {
//         const duration = data.routes[0].legs[0].duration.text;
//         setEstimatedDuration(duration);
//       } else if (data.status === "ZERO_RESULTS") {
//         console.warn("No route found between the specified points.");
//         setEstimatedDuration(null); 
//       } else {
//         console.error("Error calculating route: ", data.status);
//       }
//     } catch (error) {
//       console.error("Error fetching route data: ", error);
//     }
//   };
  
//   const calculateDistanceMap = async (docLat, docLong, desLat, desLong) => {
//     try {
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${docLat},${docLong}&destinations=${desLat},${desLong}&key=AIzaSyA6k67mLz5qFbAOpq2zx1GBX9gXqNBeS-Y`
//       );
//       const data = await response.json();
  
//       if (
//         data.status === "OK" &&
//         data.rows.length > 0 &&
//         data.rows[0].elements.length > 0 &&
//         data.rows[0].elements[0].distance
//       ) {
//         const distance = data.rows[0].elements[0].distance.text;
//         setIsDistance(distance);
//       } else if (data.status === "ZERO_RESULTS") {
//         console.warn("No distance information available between the specified points.");
//         setIsDistance(null); // Reset the distance
//       } else {
//         console.error("Error calculating distance: ", data.status);
//       }
//     } catch (error) {
//       console.error("Error fetching distance data: ", error);
//     }
//   };
  


//   const slideInLeft = {
//     from: { left: -200 },
//     to: { left: 0 },
//   };

//   const slideOutLeft = {
//     from: { left: 0 },
//     to: { left: -200 },
//   };
//   const fetchAllData = async () => {
//     try {
//       const email = auth.currentUser.email;

//       const response = await axios.get(
//         `http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/appointement/getAllDoc/${email}`
//       );
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//       throw new Error(error);
//     }
//   };


//   const filterAppoint =async(body)=>{
//     try {
//       const email = auth.currentUser.email
//       const x = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/appointement/filter/${body}/${email}`)
//       setData(x.data)
//     } catch (error) {
//       throw new Error(error)
//     }
//   }

//   const updateStatus = async (idH) => {
//     try {
//       const response = await axios.put(
//         `http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/aivability/update/${idH}`,
//         { availability: 1 }
//       );
//       setRefresh(!refresh);
//     } catch (error) {
//       throw new Error(error);
//     }
//   };
//   const updateStatusAppointement = async (idAppoint, body) => {
//     try {
//       const response = await axios.put(
//         `http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/appointement/updateAppoint/${idAppoint}`,
//         body
//       );
//       //////////////////ACCEPT///////////////////////////
//       socket.emit("acceptService", { // access
//         senderId: activeUser.id, // idDoctor
//         receiverId: id, // userId
//         message: `Service request accepted`,
//       });
//       /////////////////////REJECT///////////////////////////
//       socket.emit("rejectService", { //reject
//         senderId: activeUser.id, //doctorId
//         receiverId: id, //userId
//         message: `Service request rejected: ${message}`,
//       });

//       setRefresh(!refresh);
//     } catch (error) {
//       throw new Error(error);
//     }
//   };

//   const getUser = async (id) => {
//     try {
//       const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/user/getOneById/${id}`)
//       setOneUser({longitude:response.longitude,latitude:response.latitude,id:response.id});
//     } catch (error) {
//       throw new Error(error);
//     }
//   }

//   useEffect(() => {
//     // fetchData();
//     fetchAllData();
//     socket.on("receive-notification", (data) => {
//       console.log("Received Notification:", data);

//       PushNotification.localNotification({
//         channelId: "default",
//         title: data.title,
//         message: data.message,
//       });
//     });

//     socket.on("disconnect", () => {
//       console.log("Socket disconnected");
//     });

//     return () => {
//       socket.off("receive-notification");
//       socket.off("disconnect");
//     };
//   }, [refresh]); //add dispatch if we need

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         paddingTop: 80,
//       }}
//     >
//       <Text style={{ paddingBottom: 40, fontSize: 35, fontWeight: "bold" }}>
//         Appointment List
//       </Text>
//       <View style={{paddingLeft:280,paddingBottom:30}}>
//        {!isDropdownVisible?<TouchableOpacity onPress={toggleDropdown}>
//         <Image style={{height:45,width:45}} source={require("../assets/filtreOff.png")}/>
//         </TouchableOpacity>:<TouchableOpacity onPress={toggleDropdown}>
//         <Image style={{height:45,width:45}} source={require("../assets/filtreOn.png")}/>
//         </TouchableOpacity>}
//         </View>    
//         <Animatable.View
//       ref={dropdownRef}
//       style={{
//         position: 'absolute',
//         top: 150,
//         left: isDropdownVisible ? 0 : -290,
//         width: 290,
//         height: 70,
//         backgroundColor: 'white',
//         padding: 10,
//         borderRadius: 5,
//         elevation: 5,
//         justifyContent: 'center',
//         borderTopRightRadius: 50,
//         borderBottomRightRadius: 50,
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 10,
//       }}
//     >
//       {<TouchableOpacity onPress={() => fetchAllData()}><Text>All</Text></TouchableOpacity>}
//       <TouchableOpacity onPress={() => filterAppoint("pending")}><Text>Pending</Text></TouchableOpacity>
//       <TouchableOpacity onPress={() => filterAppoint("Accepted")}><Text>Accepted</Text></TouchableOpacity>
//       <TouchableOpacity onPress={() => filterAppoint("Rejected")}><Text>Rejected</Text></TouchableOpacity>
//     </Animatable.View>
//       <FlatList
//         data={data} 
//         keyExtractor={(appointment) => String(appointment.id)}
//         renderItem={({ item: appointment }) => (
//           <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//             paddingBottom: 15,
//             paddingTop: 15,
//             paddingRight: 15,
//             paddingLeft: 15,
//             width: 380,
//             shadowColor: "#000",
//             shadowOffset: { width: 0, height: 5 },
//             shadowOpacity: 0.15,
//             shadowRadius: 15,
//             elevation: 5, // Elevation for Android
//             // backgroundColor: "#dedede",
//             // backgroundColor: "#edeaea",
//             // borderRadius: 20,
//           }}
//         >
//           <View
//             style={{
//               flex: 1,
//               flexDirection: "colmun",
//               justifyContent: "center",
//               padding: 20,
//               backgroundColor: "white",
//               borderRadius: 20,
//               width: "100%",
//               height: 280,
//             }}
//           >
//             <View style={{ width: "100%", height: "50%" }}>
//               <View
//                 style={{
//                   flex: 1,
//                   flexDirection: "row",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <View
//                   style={{
//                     height: "100%",
//                     width: "70%",
//                     flex: 1,
//                     flexDirection: "column",
//                     gap: 2,
//                   }}
//                 >
//                   <View
//                     style={{
//                       widh: "100%",
//                       height: "60%",
//                       flex: 1,
//                       flexDirection: "column",
//                       gap: 2,
//                     }}
//                   >
//                     <Text style={{ fontSize: 25, fontWeight: "bold" }}>
//                       {appointment.User.username}
//                     </Text>
//                     <Text
//                       style={{
//                         color: "#a5a9be",
//                         fontSize: 18,
//                         fontWeight: "bold",
//                       }}
//                     >
//                       {appointment.User.email}
//                     </Text>
//                   </View>
//                   <View
//                     style={{
//                       widh: "100%",
//                       height: "30%",
//                       justifyContent: "center",
//                     }}
//                   >
                    
//                     {/* <Text
//                       style={{
//                         color: "#afb2c7",
//                         fontSize: 18,
//                         fontWeight: "bold",
//                       }}
//                     >
//                       Test test
//                     </Text> */}
//                   </View>
//                 </View>
//                 <View
//                   style={{
//                     height: "100%",
//                     width: "30%",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <View
//                     style={{
//                       // backgroundColor: "blue",
//                       height: 89,
//                       width: 89,
//                       borderRadius: 15,
//                     }}
//                   >
//                     <Image style={{height:89,width:89,borderRadius:15}} source={{uri:appointment.User.imgUrl}}/>
//                   </View>
//                 </View>
//               </View>
//             </View>
//             <View
//               style={{
//                 width: "100%",
//                 height: 0.5,
//                 backgroundColor: "#dedede",
//                 borderRadius: 2,
//               }}
//             ></View>
//             <View
//               style={{
//                 width: "100%",
//                 height: "20%",
//                 flex: 1,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-around",
//               }}
//             >
//               <View
//                 style={{
//                   height: "90%",
//                   width: "40%",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   gap: 5,
//                   flexDirection: "row",
//                 }}
//               >
//                 <Image
//                   style={{ height: 20, width: 20 }}
//                   source={require("../assets/calendar.png")}
//                 />
//                 <Text style={{ color: "#adb0c4", fontWeight: "bold" }}>
//                   {appointment.Day.day}
//                 </Text>
//               </View>
//               <View
//                 style={{
//                   height: "90%",
//                   width: "30%",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   gap: 5,
//                   flexDirection: "row",
//                 }}
//               >
//                 <Image
//                   style={{ height: 20, width: 20 }}
//                   source={require("../assets/time.png")}
//                 />
//                 <Text style={{ color: "#adb0c4", fontWeight: "bold" }}>
//                   {appointment.Availability.hour}
//                 </Text>
//               </View>
//               <View
//                 style={{
//                   height: "90%",
//                   width: "30%",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   gap: 5,
//                   flexDirection: "row",
//                 }}
//               >
//                 <Badge
//                   badgeStyle={{ height: 22, width: 85 }}
//                   value={<Text style={{ color: "white" }}>{appointment.status==="pending"?"Pending":appointment.status==="Accepted"?"Accepted":appointment.status==="Rejected"?"Rejected":null}</Text>}
//                   status={ appointment.status==="pending"?"warning":appointment.status==="Accepted"?"success":appointment.status==="Rejected"?"error":null}
//                 />
//               </View>
//             </View>
//             <View
//               style={{
//                 width: "100%",
//                 height: "30%",
//                 alignItems: "center",
//                 justifyContent: "space-around",
//                 flex: 1,
//                 flexDirection: "row",
//               }}
//             >
//            {appointment.status==="pending"?
//            <>  
//            <View
//                 style={{
//                   width: "40%",
//                   height: "90%",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   borderRadius: 80,
//                   backgroundColor: COLORS.primary,
//                 }}
//               >
//                 <TouchableOpacity
//                   onPress={() => {
//                     setIsConfirmedModal(true);
//                     setSaveData({
//                       userName: appointment.User.username,
//                       day: appointment.Day.day,
//                       hour: appointment.Availability.hour,
//                       createdDate: new Date(
//                         appointment.createdAt
//                       ).toLocaleDateString(),
//                       createdHour: new Date(
//                         appointment.createdAt
//                       ).toLocaleTimeString(),
//                     });
//                     setIdOfHour(appointment.Availability.id);
//                     setIdOfAppoint(appointment.id);
//                   }}
//                 >
//                   <Text
//                     style={{
//                       color: "white",
//                       fontWeight: "bold",
//                       fontSize: 22,
//                     }}
//                   >
//                     Accept
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//               <View
//                 style={{
//                   width: "40%",
//                   height: "90%",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   borderRadius: 80,
//                   backgroundColor: "white",
//                   borderWidth: 2,
//                   borderColor: "#f20404",
//                   borderStyle: "solid",
//                 }}
//               >
//                 <TouchableOpacity
//                   onPress={() => {
//                     setIsRejectedModal(true);
//                     setSaveData({
//                       userName: appointment.User.username,
//                       day: appointment.Day.day,
//                       hour: appointment.Availability.hour,
//                       createdDate: new Date(
//                         appointment.createdAt
//                       ).toLocaleDateString(),
//                       createdHour: new Date(
//                         appointment.createdAt
//                       ).toLocaleTimeString(),
//                     });
//                     setIdOfAppoint(appointment.id);
//                   }}
//                 >
//                   <Text
//                     style={{
//                       color: "#f20404",
//                       fontWeight: "bold",
//                       fontSize: 22,
//                     }}
//                   >
//                     Reject
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//               </> :appointment.status==="Accepted"?
//               <View
//               style={{
//                 width: "100%",
//                 height: "30%",
//                 alignItems: "center",
//                 justifyContent: "space-around",
//                 flexDirection: "row",
//               }}
//             >
//               <View
//                 style={{
//                   width: "45%",
//                   height: 50,
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   gap: 2,
//                 }}
//               >
                 
//                 <Text style={{ fontWeight: "bold", fontSize: 18 }}>
//                   Accepted At :
//                 </Text>
//                 <Text style={{ color: "#adb0c4", fontWeight: "bold" }}>
//                   {new Date(appointment.updatedAt).toLocaleDateString()}{" "}
//                   {new Date(appointment.updatedAt).toLocaleTimeString()}
//                 </Text>
//               </View>
//               <View
//                 style={{
//                   justifyContent: "center",
//                   alignItems: "center",
//                   flexDirection: "row",
//                   height: "100%",
//                   gap: 5,
//                 }}
//               >
//                 {/* <TouchableOpacity>
//                   <Image
//                     style={{ width: 48, height: 48 }}
//                     source={require("../assets/chat.png")}
//                   />
//                 </TouchableOpacity> */}
//                 <TouchableOpacity onPress={() => setSendEmail(true)}>
//                   <Image
//                     style={{ width: 48, height: 48 }}
//                     source={require("../assets/email.png")}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                 onPress={()=>{setOneUser({longitude:appointment.User.longitude,latitude:appointment.User.latitude,id:appointment.User.id,name:appointment.User.username});userToMap(appointment.User.latitude,appointment.User.longitude,appointment.User.id,appointment.User.username,appointment.Doctor.fullname);getTime(appointment.Doctor.latitude,appointment.Doctor.longitude,appointment.User.latitude,appointment.User.longitude);calculateDistanceMap(appointment.Doctor.latitude,appointment.Doctor.longitude,appointment.User.latitude,appointment.User.longitude);showMapModal();console.log("==>===>AAAAAAA===>===>====>===>",appointment.Doctor.latitude,appointment.Doctor.longitude,appointment.User.latitude,appointment.User.longitude,"thisssssssssss");}}
//                 >
//                   <Image
//                     style={{ width: 48, height: 48 }}
//                     source={require("../assets/multiple.png")}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>:appointment.status==="Rejected"?
//             <View
//             style={{
//               width: "100%",
//               height: "30%",
//               alignItems: "center",
//               justifyContent: "space-around",
//               flexDirection: "row",
//             }}
//           >
//             <View
//               style={{
//                 width: "45%",
//                 height: 50,
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 gap: 2,
//               }}
//             >
//               <Text style={{ fontWeight: "bold", fontSize: 18 }}>
//                 Rejected At :
//               </Text>
//               <Text style={{ color: "#adb0c4", fontWeight: "bold" }}>
//                 {new Date(appointment.updatedAt).toLocaleDateString()}{" "}
//                 {new Date(appointment.updatedAt).toLocaleTimeString()}
//               </Text>
//             </View>
//             <View
//               style={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 flexDirection: "row",
//                 height: "100%",
//                 gap: 15,
//               }}
//             >
//               {/* <TouchableOpacity>
//                 <Image
//                   style={{ width: 48, height: 48 }}
//                   source={require("../assets/chat.png")}
//                 />
//               </TouchableOpacity> */}
//               <TouchableOpacity>
//                 <Image
//                   style={{ width: 48, height: 48 }}
//                   source={require("../assets/email.png")}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>:null
//               }
//                 <Modal
//                 visible={isConfirmedModal}
//                 animationType="fade"
//                 transparent={true}
//               >
//                 <View style={styles.modalContainer}>
//                   <View style={styles.modalContent}>
//                     <Text
//                       style={{
//                         justifyContent: "center",
//                         alignItems: "center",
//                         textAlign: "center",
//                         paddingTop: 20,
//                         fontWeight: "bold",
//                         fontSize: 18,
//                         color: "#677294",
//                       }}
//                     >
//                       Are you sure to confirme the appointement of{" "}
//                       {saveData.userName}, on {saveData.day}, at {saveData.hour}
//                     </Text>
//                     <View style={{ flexDirection: "row", gap: 20 }}>
//                       <View
//                         style={{
//                           width: "45%",
//                           backgroundColor: COLORS.primary,
//                           height: 45,
//                           borderRadius: 50,
//                           justifyContent: "center",
//                           alignItems: "center",
//                         }}
//                       >
//                         <TouchableOpacity
//                           onPress={() => {
//                             setIsConfirmedModal(false);
//                             setIsConfirmedModalSec(true);
//                             updateStatus(idOfHour);
//                             updateStatusAppointement(idOfAppoint, {
//                               status: "Accepted",
//                             });
//                           }}
//                         >
//                           <Text
//                             style={{
//                               color: "white",
//                               fontWeight: "bold",
//                               fontSize: 20,
//                             }}
//                           >
//                             Confirme
//                           </Text>
//                         </TouchableOpacity>
//                       </View>
//                       <View
//                         style={{
//                           width: "45%",
//                           backgroundColor: "white",
//                           height: 45,
//                           borderRadius: 50,
//                           justifyContent: "center",
//                           alignItems: "center",
//                           borderWidth: 2,
//                           borderColor: "#f20404",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         <TouchableOpacity
//                           style={{}}
//                           onPress={() => setIsConfirmedModal(false)}
//                         >
//                           <Text
//                             style={{
//                               color: "#f20404",
//                               fontWeight: "bold",
//                               fontSize: 20,
//                             }}
//                           >
//                             Close
//                           </Text>
//                         </TouchableOpacity>
//                       </View>
//                     </View>
//                   </View>
//                 </View>
//               </Modal>
//               <Modal
//                 visible={isConfirmedModalSec}
//                 animationType="fade"
//                 transparent={true}
//               >
//                 <View style={stylesModalSec.modalContainer}>
//                   <View style={stylesModalSec.modalContent}>
//                     <View
//                       style={{
//                         justifyContent: "center",
//                         alignItems: "center",
//                         flexDirection: "column",
//                         paddingTop: 30,
//                         gap: 16,
//                       }}
//                     >
//                       <Image
//                         style={{ width: 200, height: 200 }}
//                         source={require("../assets/coche.png")}
//                       />
//                       <Text
//                         style={{
//                           color: "#677294",
//                           fontSize: 22,
//                           fontWeight: "bold",
//                           textAlign: "center",
//                         }}
//                       >
//                         The Appointement is Accepted
//                       </Text>
//                       <View
//                         style={{
//                           flexDirection: "row",
//                           justifyContent: "center",
//                           alignItems: "center",
//                         }}
//                       ></View>
//                     </View>
//                     <Text
//                       style={{
//                         color: "#677294",
//                         fontSize: 16,
//                         fontWeight: "bold",
//                         textAlign: "center",
//                       }}
//                     >
//                       You accepted an appointement with {saveData.userName}, on{" "}
//                       {saveData.day}, at {saveData.hour}
//                     </Text>

//                     <View
//                       style={{
//                         width: "45%",
//                         backgroundColor: COLORS.primary,
//                         height: height * 0.08,
//                         borderRadius: 50,
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       <TouchableOpacity
//                         onPress={() => setIsConfirmedModalSec(false)}
//                         style={{
//                           width: "45%",
//                           backgroundColor: COLORS.primary,
//                           height: 30,
//                           borderRadius: 50,
//                           justifyContent: "center",
//                           alignItems: "center",
//                         }}
//                       >
//                         <Text
//                           style={{
//                             color: "white",
//                             fontWeight: "bold",
//                             fontSize: 20,
//                           }}
//                         >
//                           Done
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </View>
//               </Modal>
//               <Modal
//                 visible={isRejectedModal}
//                 animationType="fade"
//                 transparent={true}
//               >
//                 <View style={styles.modalContainer}>
//                   <View style={styles.modalContent}>
//                     <Text
//                       style={{
//                         justifyContent: "center",
//                         alignItems: "center",
//                         textAlign: "center",
//                         paddingTop: 20,
//                         fontWeight: "bold",
//                         fontSize: 18,
//                         color: "#677294",
//                       }}
//                     >
//                       Are you sure to reject an appointement with{" "}
//                       {saveData.userName}, on {saveData.day}, at {saveData.hour}
//                     </Text>
//                     <View style={{ flexDirection: "row", gap: 20 }}>
//                       <View
//                         style={{
//                           width: "45%",
//                           backgroundColor: COLORS.primary,
//                           height: 45,
//                           borderRadius: 50,
//                           justifyContent: "center",
//                           alignItems: "center",
//                         }}
//                       >
//                         <TouchableOpacity
//                           onPress={() => {
//                             setIsRejectedModal(false);
//                             setIsRejectedModalSec(true);
//                             updateStatusAppointement(idOfAppoint, {
//                               status: "Rejected",
//                             });
//                           }}
//                         >
//                           <Text
//                             style={{
//                               color: "white",
//                               fontWeight: "bold",
//                               fontSize: 20,
//                             }}
//                           >
//                             Reject
//                           </Text>
//                         </TouchableOpacity>
//                       </View>
//                       <View
//                         style={{
//                           width: "45%",
//                           backgroundColor: "white",
//                           height: 45,
//                           borderRadius: 50,
//                           justifyContent: "center",
//                           alignItems: "center",
//                           borderWidth: 2,
//                           borderColor: "#f20404",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         <TouchableOpacity
//                           onPress={() => setIsRejectedModal(false)}
//                         >
//                           <Text
//                             style={{
//                               color: "#f20404",
//                               fontWeight: "bold",
//                               fontSize: 20,
//                             }}
//                           >
//                             Close
//                           </Text>
//                         </TouchableOpacity>
//                       </View>
//                     </View>
//                   </View>
//                 </View>
//               </Modal>
//               <Modal
//                 visible={isRejectedModalSec}
//                 animationType="fade"
//                 transparent={true}
//               >
//                 <View style={stylesModalSec.modalContainer}>
//                   <View style={stylesModalSec.modalContent}>
//                     <View
//                       style={{
//                         justifyContent: "center",
//                         alignItems: "center",
//                         flexDirection: "column",
//                       }}
//                     >
//                       <Image
//                         style={{ width: 250, height: 250 }}
//                         source={require("../assets/marqueX.png")}
//                       />
//                       {/* <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}> */}
//                       <Text
//                         style={{
//                           color: "#677294",
//                           fontSize: 22,
//                           fontWeight: "bold",

//                           textAlign: "center",
//                         }}
//                       >
//                         The Appointement is Rejected
//                       </Text>
//                       {/* </View> */}
//                     </View>
//                     <Text
//                       style={{
//                         color: "#677294",
//                         fontSize: 16,
//                         fontWeight: "bold",
//                         textAlign: "center",
//                       }}
//                     >
//                       You rejected an appointement with {saveData.userName}, on{" "}
//                       {saveData.day}, at {saveData.hour}
//                     </Text>

//                     <View
//                       style={{
//                         width: "45%",
//                         backgroundColor: COLORS.primary,
//                         height: height * 0.08,
//                         borderRadius: 50,
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       <TouchableOpacity
//                         onPress={() => setIsRejectedModalSec(false)}
//                         style={{
//                           width: "45%",
//                           backgroundColor: COLORS.primary,
//                           height: 30,
//                           borderRadius: 50,
//                           justifyContent: "center",
//                           alignItems: "center",
//                         }}
//                       >
//                         <Text
//                           style={{
//                             color: "white",
//                             fontWeight: "bold",
//                             fontSize: 20,
//                           }}
//                         >
//                           Done
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </View>
//               </Modal>
//               <Modal
//                 animationType="fade"
//                 transparent={true}
//                 visible={sendEmail}
//               >
//                 <View style={styles.modalContainer}>
//                   <View style={styles.modalContent}>
    
//                     <TextInput
//         style={{ height: 100, borderColor: 'gray', borderWidth: 1,width:"100%",height:300, marginBottom: 10, padding: 10 }}
//         placeholder="Type here..."
//         onChangeText={handleTextChange}
//         value={text}
//       />
//                     <View>
//                       <TouchableOpacity
//                         onPress={() => setSendEmail(false)}
//                         style={styles.modalButton}
//                       >
//                         <Image
//                           style={{ height: 45, width: 45 }}
//                           source={require("../assets/envoyer.png")}
//                         />
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </View>
//               </Modal>
//               <Modal
//         visible={btnFilterModal}
//         animationIn="slideInLeft"
//         animationOut="slideOutLeft"
//         transparent={true}
//       >
//         <View style={stylessss.modalContainer}>
//             <View style={stylessss.modalContent}>
//           <TouchableOpacity onPress={()=>setBtnFilterModal(false)}>
//             <Text>Hide Modal</Text>
//           </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//       <Modal
//         animationType="fade"
//         transparent={true}
//         visible={mapModalVisible}
//         onRequestClose={hideMapModal}
//       >
//         <View style={stylesModalMap.modalContainer}>
//           <View style={stylesModalMap.modalContent}>
//             <View >
//       <AnimatedLottieView
//         source={require('../assets/Animation - 1700485749110.json')}
//         autoPlay
//         loop
//         style={{ width: 220, height: 220 }}
//       />
//     </View>
//          <View style={{justifyContent:"center",alignItems:"center"}}>
//             <Text style={{
//                         color: "#677294",
//                         fontSize: 17,
//                         fontWeight: "bold",
//                         textAlign: "center",
//                       }}>Confirm navigation to {oneUser.name}'s location? </Text>
//             <Text style={{
//                         color: "#677294",
//                         fontSize: 17,
//                         fontWeight: "bold",
//                         textAlign: "center",
//                       }}>The distance is approximately </Text>
//                       <Text style={{
//                         color: "#09d3a2",
//                         fontSize: 17,
//                         fontWeight: "bold",
//                         textAlign: "center",
//                       }}>
//                       {isDistance} 
//                       </Text>
//                       <Text style={{
//                         color: "#677294",
//                         fontSize: 17,
//                         fontWeight: "bold",
//                         textAlign: "center",
//                       }}> an estimated travel time of </Text>
//                        <Text style={{
//                         color: "#09d3a2",
//                         fontSize: 17,
//                         fontWeight: "bold",
//                         textAlign: "center",
//                       }}> {estimatedDuration}.</Text>
//          </View>
//             <View style={{flexDirection:"row",gap:20,alignItems:"center"}}>
//             {/* <TouchableOpacity onPress={hideMapModal}>
//               <Text>Confirme</Text>
//             </TouchableOpacity> */}
         
//                         <View
//                         style={{
//                           width: "45%",
//                           backgroundColor: COLORS.primary,
//                           height: 45,
//                           borderRadius: 50,
//                           justifyContent: "center",
//                           alignItems: "center",
//                         }}
//                       >
//                         <TouchableOpacity
//                           onPress={()=>{hideMapModal();navigation.navigate('mapDirection')
//                         }}
//                         >
//                           <Text
//                             style={{
//                               color: "white",
//                               fontWeight: "bold",
//                               fontSize: 20,
//                             }}
//                           >
//                             Navigate
//                           </Text>
//                         </TouchableOpacity>
//                       </View>
//                       <View
//                         style={{
//                           width: "45%",
//                           backgroundColor: "white",
//                           height: 45,
//                           borderRadius: 50,
//                           justifyContent: "center",
//                           alignItems: "center",
//                           borderWidth: 2,
//                           borderColor: "#f20404",
//                           borderStyle: "solid",
//                         }}
//                       >
//                         <TouchableOpacity
//                           style={{}}
//                           onPress={hideMapModal}
//                         >
//                           <Text
//                             style={{
//                               color: "#f20404",
//                               fontWeight: "bold",
//                               fontSize: 20,
//                             }}
//                           >
//                             Close
//                           </Text>
//                         </TouchableOpacity>
//                       </View>
//                         {/* <TouchableOpacity
//                           style={{}}
//                           onPress={() => onPress={hideMapModal}}
//                         >
//                           <Text
//                             style={{
//                               color: "#f20404",
//                               fontWeight: "bold",
//                               fontSize: 20,
//                             }}
//                           >
//                             Close
//                           </Text>
//                         </TouchableOpacity> */}
//             {/* <TouchableOpacity onPress={hideMapModal}>
//               <Text>Close</Text>
//             </TouchableOpacity> */}
//             </View>
//           </View>
//         </View>
//       </Modal>
//             </View>
//           </View>
//         </View>
//         )}
//       />
//       {/* ///////////////////////////////////MODALS//////////////////////////////////////////// */}
//     </View>
//   );
// };
// const stylesModalSec = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
  
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     padding: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 4,
//     borderColor: 'rgba(0, 0, 0, 0.1)',
//     height: 50,
//     width: 90,
//     position:"absolute",
//     top:350,
//     left:150
//   },
//   modalContent: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//     width: 300,
//     height: 520,
//     justifyContent: "space-between",
//     alignItems: "center",
//     flexDirection: "column",
//   },
// });
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.1)",
//   },
//   modalContent: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//     width: 300,
//     height: 400,
//     justifyContent: "space-between",
//     alignItems: "center",
//     flexDirection: "column",
//   },
// });
// const stylesModFilter = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     padding: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 4,
//     borderColor: 'rgba(0, 0, 0, 0.1)',
//   },
// });

// const stylessss = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   animatedContainer: {
//     backgroundColor: 'black',
//     padding: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 4,
//     borderColor: 'rgba(0, 0, 0, 0.1)',
//     height:20
//   },
//   visible: {
// flex:1  },
//   hidden: {
//     display: 'none',
//   },
//   buttonsContainer: {
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   button: {
//     backgroundColor: 'lightblue',
//     padding: 10,
//     borderRadius: 5,
//   },
// });

// const stylesModalMap = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.1)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//     height:520,
//     width:300,
//     flexDirection:"column",
//     justifyContent:"space-between",
//     alignItems:"center"
//   },
// });


// export default AppointementList;
// ////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   ScrollView,
// } from "react-native";

// import Icon from "react-native-vector-icons/FontAwesome";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import PharmacyCard from "../components/PharmacyCard";
// import MedicineCard from "../components/MedicineCard";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import NavigationBar from "../components/NavigationBar";
// import { useNavigation } from "@react-navigation/native";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPharmacies } from "../redux/pharmacySlicer";
// import { fetchMedicines } from "../redux/medecineSlicer";
// import DoctorCard from "../components/DrCard";
// import { fetchDoctors } from "../redux/doctorSlicer";
// import { fetchOrdersByUserId } from "../redux/orderSlicer";
// import { auth } from "../firebase-config";
// import { useFocusEffect } from "@react-navigation/native";
// import { Dimensions } from "react-native";
// ///////////////////////////////
// import io from "socket.io-client";
// import * as Device from "expo-device";
// import * as Notifications from "expo-notifications";
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//   }),
// });
// async function schedulePushNotification(notification) {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: notification,
//     },
//     trigger: { seconds: 1 },
//   });
// }

// const { width, height } = Dimensions.get("window");

// const Landing = ({ route }) => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const pharmacies = useSelector((state) => state.pharmacy?.data);
//   const medicines = useSelector((state) => state.medecine?.data);
//   const doctors = useSelector((state) => state.doctor?.data);
//   const verifiedDoctors = doctors.filter((doctor) => doctor.Doctor.isverified);
//   const [clients, setClients] = useState([]);
//   const socket = io(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128`);
//   const [expoPushToken, setExpoPushToken] = useState("");
//   const [notification, setNotification] = useState(false);
//   const notificationListener = useRef();
//   console.log("first");
//   const fetch1 = () => {
//     dispatch(fetchPharmacies());
//   };
//   const fetch2 = () => {
//     dispatch(fetchMedicines());
//   };

//   const fetch3 = () => {
//     dispatch(fetchDoctors());
//   };

//   useEffect(() => {
//     registerForPushNotificationsAsync().then((token) =>
//       setExpoPushToken(token)
//     );

//     notificationListener.current =
//       Notifications.addNotificationReceivedListener((notification) => {
//         setNotification(notification);
//       });

//     responseListener.current =
//       Notifications.addNotificationResponseReceivedListener((response) => {
//         console.log(response);
//       });

//     return () => {
//       Notifications.removeNotificationSubscription(
//         notificationListener.current
//       );
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);

//   useEffect(() => {
   
//     if (activeUser?.id) { //cuurent id///////////////////////////////////////////////////////////////////////////
//       socket.emit("login", { userId: activeUser?.id });

//       socket.on("receive-notification", (notification) => {
//         schedulePushNotification(notification.title);

//         setMessages((prevMessages) => [
//           ...prevMessages,
//           {
//             _id: notification.id,
//             text: notification.message,
//             createdAt: new Date(),
//             user: {
//               _id: notification.senderId,
//               name: "Services",
//             },
//           },
//         ]);
//       });
//     } else {
//       return () => {
//         socket.disconnect();
//       };
//     }
//   }, [socket, expoPushToken, activeUser?.id, activeUser?.stateBlocked]);

//   useEffect(() => {
//     fetch1();
//     fetch2();
//     fetch3();
//   }, []);

//   let topRatedPharmacies = [];

//   if (pharmacies) {
//     topRatedPharmacies = pharmacies.filter(
//       (pharmacy) => pharmacy.rating >= 4.5
//     );
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <ScrollView style={styles.container}>
//         <View style={styles.header}>
//           <View style={styles.greeting}>
//             <Text style={styles.helloText}>Hello,</Text>
//             <Text style={styles.userName}>Ahmed</Text>
//           </View>
//           <View style={styles.icons}>
//             <TouchableOpacity>
//               <View style={styles.iconContainer}>
//                 <Icon
//                   name="bell-o"
//                   size={25}
//                   color="grey"
//                   style={styles.icon}
//                 />
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("orderDetails")}
//             >
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons
//                   name="cart-outline"
//                   size={25}
//                   color="grey"
//                 />
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={styles.secondOrdersContainer}>
//           <Text style={styles.ordersText}>Pharmacies near you</Text>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>SEE ALL</Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//           <FlatList
//             data={pharmacies}
//             renderItem={({ item }) => <PharmacyCard pharmacy={item} />}
//             keyExtractor={(item, index) => index.toString()}
//             horizontal={true}
//           />
//         </View>

//         <View style={styles.secondOrdersContainer}>
//           <Text style={styles.ordersText}>Top Rated Pharmacies</Text>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>SEE ALL</Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//           <FlatList
//             data={topRatedPharmacies}
//             renderItem={({ item }) => <PharmacyCard />}
//             keyExtractor={(item, index) => index.toString()}
//             horizontal={true}
//           />
//         </View>
//         <View style={styles.secondOrdersContainer}>
//           <Text style={styles.ordersText}>Medicines</Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() =>
//               navigation.navigate("AllMedicines", { medicines: medicines })
//             }
//           >
//             <Text style={styles.buttonText}>SEE ALL</Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//           <FlatList
//             data={medicines}
//             renderItem={({ item }) => <MedicineCard medecine={item} />}
//             keyExtractor={(item, index) => index.toString()}
//             horizontal={true}
//             contentContainerStyle={{
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           />
//         </View>
//         <View style={styles.secondOrdersContainer}>
//           <Text style={styles.ordersText}>Doctors</Text>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               navigation.navigate("AllDoctors");
//             }}
//           >
//             <Text style={styles.buttonText}>SEE ALL</Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//           <FlatList
//             data={verifiedDoctors}
//             renderItem={({ item }) => <DoctorCard doctor={item} />}
//             keyExtractor={(item, index) => index.toString()}
//             horizontal={true}
//             contentContainerStyle={{
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           />
//         </View>
//         <View style={{ height: 40 }} />
//       </ScrollView>
//       <NavigationBar />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: width * 0.02,
//   },
//   greeting: {
//     flexDirection: "column",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: height * 0.06,
//   },
//   helloText: {
//     fontSize: width * 0.05,
//   },
//   userName: {
//     fontWeight: "bold",
//     fontSize: width * 0.09,
//   },
//   icons: {
//     flexDirection: "row",
//   },
//   iconContainer: {
//     borderWidth: 1,
//     borderRadius: width * 0.13,
//     padding: width * 0.02,
//     marginRight: width * 0.03,
//     backgroundColor: "#E8E8E8",
//     borderColor: "#D3D3D3",
//   },
//   ordersContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: height * 0.07,
//   },
//   secondOrdersContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: height * 0.05,
//   },
//   ordersText: {
//     fontSize: width * 0.045,
//     fontWeight: "bold",
//   },
//   button: {
//     backgroundColor: "#ddf0ee",
//     borderRadius: width * 0.05,
//     paddingVertical: height * 0.004,
//     paddingHorizontal: width * 0.03,
//   },
//   buttonText: {
//     color: "#2d958c",
//     fontSize: width * 0.037,
//   },
// });


// async function registerForPushNotificationsAsync() {
//   let token;
//   if (Platform.OS === "android") {
//     await Notifications.setNotificationChannelAsync("default", {
//       name: "default",
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: "#FF231F7C",
//     });
//   }

//   if (Device.isDevice) {
//     const { status: existingStatus } =
//       await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== "granted") {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== "granted") {
//       alert("Failed to get push token for push notification!");
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert("Must use physical device for Push Notifications");
//   }

//   return token;
// }

// export default Landing;
