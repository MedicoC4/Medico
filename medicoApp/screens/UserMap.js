import React,{useEffect, useState} from "react";
import { StyleSheet, Text, View,TouchableOpacity,Button,Modal } from "react-native";
import MapView, {Marker,PROVIDER_GOOGLE,Polyline} from "react-native-maps";
import * as Location from "expo-location"
import Slider from '@react-native-community/slider';
import haversine from 'haversine';
import MapViewDirections from 'react-native-maps-directions';

// import Config from 'react-native-config'

const UserMap = () => {
      const [radiusInMeters, setRadiusInMeters] = useState(20000);
      const [selectedMarker, setSelectedMarker] = useState(null);
      const [modalVisible, setModalVisible] = useState(false);


      const [distance, setIsDistance] = useState(null);
      const [isNavigation, setIsNavigation] = useState(false);
      const [duration, setEstimatedDuration] = useState(null);
      const [destination, setDestination] = useState({});
      const [location, setLocation] = useState(null);
      const [mapRegion, setMapRegion] = useState({
        latitude: 36.892280 ,// You can replace these with your default values
        longitude: 10.150136,      
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    //   const mapApiKey = Config.MAP_API

      const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }
    
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        setMapRegion({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.0922, // Initial values
          longitudeDelta: 0.0421,
        });
      };
      const doctor = [
        {
          latitude: 36.875446,
          longitude: 10.202043,
          name: 'Doctor 1',
          specialty: 'Specialty 1',
        },
        {
          latitude: 36.851164,
          longitude: 10.193179,
          name: 'Doctor 2',
          specialty: 'Specialty 2',
        },
        {
          latitude: 36.812638,
          longitude: 10.143401,
          name: 'Doctor 3',
          specialty: 'Specialty 3',
        },
        {
          latitude: 36.743396,
          longitude: 10.256431,
          name: 'Doctor 4',
          specialty: 'Specialty 4',
          // Add more details
        },
      ];

      const getTime = async (desLat,desLong) => {
        if (location && destination) {
          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/directions/json?origin=${location.coords.latitude},${location.coords.longitude}&destination=${desLat},${desLong}&key=AIzaSyA6k67mLz5qFbAOpq2zx1GBX9gXqNBeS-Y`
            );
            const data = await response.json();
            if (data.status === "OK") {
              const duration = data.routes[0].legs[0].duration.text;
              setEstimatedDuration(duration);
            } else {
              console.error("Error calculating route: ", data.status);
            }
          } catch (error) {
            console.error("Error fetching route data: ", error);
          }
        }
      };

      const calculateDistanceMap = async (desLat, desLong) => {
        if (location) {
          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${location.coords.latitude},${location.coords.longitude}&destinations=${desLat},${desLong}&key=AIzaSyA6k67mLz5qFbAOpq2zx1GBX9gXqNBeS-Y`
            );
            const data = await response.json();
            if (data.status === "OK") {
              const distance = data.rows[0].elements[0].distance.text;
              setIsDistance(distance);
            } else {
              console.error("Error calculating distance: ", data.status);
            }
          } catch (error) {
            console.error("Error fetching distance data: ", error);
          }
        }
      };

      console.log(mapRegion);
      // Function to calculate the distance between two coordinates
  const calculateDistance = (start, end) => {
    return haversine(start, end, { unit: 'meter' });
  };
    // Filter the doctors within the specified radius
    const doctorsWithinRadius = doctor.filter((doc) => {
        const distance = calculateDistance(mapRegion, doc);
        return distance <= radiusInMeters;
      });
      const handleMarkerPress = (marker) => {
        setSelectedMarker(marker);
        setModalVisible(true);
      };

      const calculateDistanceInKm = (start, end) => {
        const distanceInMeters = haversine(start, end, { unit: 'meter' });
        const distanceInKm = distanceInMeters / 1000; 
        return distanceInKm;
      };

      useEffect(()=>{
        getLocation()
      },[])
      return (
        <View style={styles.container}>
          <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={mapRegion}>
            {doctorsWithinRadius.map((doct, i) => (
              <Marker
                key={i}
                coordinate={doct}
                onPress={() => {handleMarkerPress(doct);
                    setDestination({
                    latitude: doct.latitude,
                    longitude: doct.longitude,
                    latitudeDelta: 0.0922, // Initial values
                    longitudeDelta: 0.0421 
                });
                getTime(doct.latitude,doct.longitude);
                calculateDistanceMap(doct.latitude,doct.longitude)
              }}
              />
            ))}
            <Marker coordinate={mapRegion} pinColor="green" />
          </MapView>
          {isNavigation && location && (
          <MapViewDirections
            origin={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            destination={destination}
            apikey="AIzaSyA6k67mLz5qFbAOpq2zx1GBX9gXqNBeS-Y"
            strokeWidth={3}
            strokeColor="blue"
          />
        )}
          <View>
            <TouchableOpacity onPress={() => getLocation()}>
              <Text>Location</Text>
            </TouchableOpacity>
          </View>
          <Slider
            style={{ width: 300 }}
            minimumValue={1000}
            maximumValue={30000}
            step={1000}
            value={radiusInMeters}
            onValueChange={(value) => setRadiusInMeters(value)}
          />
          <Text>Radius: {(radiusInMeters) / 1000} Km</Text>
          <Modal
  visible={modalVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modal}>
      <Text>Name: {selectedMarker?.name}</Text>
      <Text>Specialty: {selectedMarker?.specialty}</Text>
      <Text>Estimated Duration: {duration}</Text>
      <Text>Estimated Distance: {distance}</Text>
      <TouchableOpacity onPress={()=>setIsNavigation(true)}><Text>Navig</Text></TouchableOpacity>
      {/* <Slider style={{ width: 200 }} minimumValue={0} maximumValue={100} step={1} /> */}
      <Button title="Close" onPress={() => {setModalVisible(false);setIsNavigation(false)}} />
    </View>
  </View>
</Modal>

        </View>
      );
        
    }
    
    export default UserMap




//create our styling code:
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modal: {
      height: 300,
      width:"100%", // Set the desired height for the modal
      backgroundColor: 'white',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });