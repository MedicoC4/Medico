import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Dimensions, StyleSheet, View, Button } from "react-native";
import * as Location from "expo-location";

const { width, height } = Dimensions.get("window");
export default function MapLocation() {
  const [mapRegin, setMapRegin] = useState({
    latitude: 36.8065,
    longitude: 10.1815,
    latitudeDelta: 0.05459,
    longitudeDelta: 0.0532,
  });
  const [latitude, setlatitude] = useState(0)
  const [Longtituse, setLongtituse] = useState(0)


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
    console.log(location.coords.latitude, location.coords.longitude);
  };
  useEffect(() => {
    userLocation();
  }, []);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegin}>
        <Marker coordinate={mapRegin} title="Your Location" />
      </MapView>
      <Button title="Get Location" style={styles.butt} onPress={userLocation} />
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
