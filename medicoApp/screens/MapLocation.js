import React, { useEffect, useState , useContext} from "react";
import MapView, { Marker } from "react-native-maps";
import { Dimensions, StyleSheet, View, Button } from "react-native";
import * as Location from "expo-location";
import { updateLocation } from "../redux/doctorSlicer";
import {useSelector , useDispatch} from'react-redux'
import { auth } from "../firebase-config";

const { width, height } = Dimensions.get("window");
export default function MapLocation() {
  const [latitude , setLatitude] = useState(0)
  const [longtitude , setLongtitude] = useState(0)
 
  const dispatch = useDispatch()

  const location = async()=>{
    const email = auth.currentUser.email
    const obj = {
      lang:longtitude,
      lat:latitude,
    }
   dispatch(updateLocation(obj))
  //  navigation.navigate("UpgradeDocSecoundForm")
  //  await AsyncStorage.setItem('type', 'doctor');
  }
  const locationss = useSelector((state)=>{
    state.doctor.data
  })

  useEffect(()=>{
    location()
  },[])


  const [mapRegin, setMapRegin] = useState({
    latitude: 36.8065,
    longitude: 10.1815,
    latitudeDelta: 0.05459,
    longitudeDelta: 0.0532,
  });
  

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegin({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.004599539499977823,
      longitudeDelta: 0.0032310560345631956,
    });

    setLatitude(setMapRegin.latitude)
    setLongtitude(setMapRegin.longitude)

    
    console.log(location.coords.latitude, location.coords.longitude);
  };
  useEffect(() => {
    userLocation();
    console.log(latitude, longtitude);
  }, []);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegin}>
        <Marker coordinate={mapRegin} title="Your Location" />
      </MapView>
      <Button title="Get Location" style={styles.butt} onPress={()=>{userLocation() ; location()}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
  },
  map: {
    width: width * 1,
    height: height * 1,
  },
  butt: {
    alignContent: "center",
    marginBottom: 2,
  },
});
