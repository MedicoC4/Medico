import React, { useEffect, useState } from 'react';
import MapView ,{Marker}from 'react-native-maps';
import { Dimensions, StyleSheet, View , Button} from 'react-native';
import * as Location from 'expo-location';


export default function App() {
  const [mapRegin ,setMapRegin] = useState({
    "latitude": 36.88180585894427, 
    "longitude": 10.185786131769419, 
    "latitudeDelta": 0.004599539499977823, 
    "longitudeDelta": 0.0032310560345631956
  })
  const userLocation = async ()=>{
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
  }
  let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
   setMapRegin({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    "latitudeDelta": 0.004599539499977823, 
    "longitudeDelta": 0.0032310560345631956 
   })
   console.log(location.coords.latitude, location.coords.longitude );
}
useEffect(()=>{
  userLocation()
},[])
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      region={mapRegin}
      >
        <Marker coordinate={mapRegin} title='Your Location'/>
      </MapView>
      <Button title='Get Location' style={styles.butt}onPress={userLocation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent : 'center',
  },
  map: {
    width: '100%',
    height: '80%',
  },
  butt : {
    alignContent: 'center',
  }
});
