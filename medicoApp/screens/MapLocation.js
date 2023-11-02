import React, { useEffect, useState } from 'react';
import MapView ,{Marker}from 'react-native-maps';
import { StyleSheet, View , Text , Dimensions} from 'react-native';
import * as Loation from 'expo-location'
import { Button } from 'react-native-paper';

export default function App() {

    const [mapRegion , setMapRegion]=useState({
        "latitude": 36.88180585894427, 
        "longitude": 10.185786131769419, 
        "latitudeDelta": 0.004599539499977823, 
        "longitudeDelta": 0.0032310560345631956} 


    )
    const userLocation = async()=>{
        let {status} = await Location.requestForegroundPermissionAsync()
        if (status !== 'granted') {
            setErrorMsg('Permission denied')
        }
        let location = await Location.getCurrentPositionAsynv({enableHighAccuracy: true})
        setMapRegion({
            latitude : location.coords.latitude,
            longtitude : location.coords.longitude,
            latitudeDelta :0.0400,
            longtitudeDelta :0.0200
        })
        console.log(location.coords.latitude, location.coords.longitude);
    }

    useEffect(()=>{
        userLocation()
    },[])
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      region={mapRegion}>

      <Marker coordinate={mapRegion} title='Marker'/>
      </MapView>
      <Button title='Get Location' onPress={userLocation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});