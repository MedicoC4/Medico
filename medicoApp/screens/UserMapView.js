import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';

const UserMapView = () => {
 const [destination, setDestination] = useState({
   latitude: 36.463734,
   longitude: 10.808571,
 });

 const [userLocation, setUserLocation] = useState(null);
 const [following, setFollowing] = useState(false);

 const mapRef = useRef(null);
 const markerRef = useRef(null);

 const getLocation = async () => {
   let { status } = await Location.requestForegroundPermissionsAsync();
   if (status !== 'granted') {
     console.error('Permission to access location was denied');
     return;
   }

   let currentLocation = await Location.getCurrentPositionAsync({});
   setUserLocation(currentLocation.coords);

   if (following) {
     animateToRegion(currentLocation.coords);
   }
 };

 const startIteniraire = () => {
   getLocation(); // Call immediately to get the initial location
   setFollowing(true);
 };

 const stopIteniraire = () => {
   setFollowing(false);
 };

 const animateToRegion = async (location) => {
   if (mapRef.current && markerRef.current) {
     const { latitude, longitude } = location;

     // Calculate the new camera position
     const newCamera = {
       center: {
         latitude,
         longitude,
       },
       pitch: 0, // Adjust the pitch as needed
       heading: getHeading(userLocation, location), // Adjust the heading based on user movement
       altitude: 1, // Set a low altitude to keep the camera close to the floor
       zoom: 20, // Adjust the zoom level as needed
     };

     // Animate the camera movement
     mapRef.current.animateCamera(newCamera, { duration: 1000 });

     // Move the marker smoothly
     markerRef.current.animateMarkerToCoordinate({ latitude, longitude }, 1000);
   }
 };

 const getHeading = (fromLocation, toLocation) => {
   if (!fromLocation || !toLocation) {
     return 0;
   }

   const { latitude: fromLat, longitude: fromLon } = fromLocation;
   const { latitude: toLat, longitude: toLon } = toLocation;

   const dLon = toLon - fromLon;
   const y = Math.sin(dLon) * Math.cos(toLat);
   const x = Math.cos(fromLat) * Math.sin(toLat) - Math.sin(fromLat) * Math.cos(toLat) * Math.cos(dLon);

   let heading = Math.atan2(y, x);
   heading = (heading * 180) / Math.PI; // Convert radians to degrees
   heading = (heading + 360) % 360; // Ensure the result is between 0 and 360 degrees

   return heading;
 };

 useEffect(() => {
   if (following) {
     const id = setInterval(getLocation, 500);
     return () => clearInterval(id);
   }
   getLocation()
 }, [following]);

 return (
   <View style={styles.container}>
     <MapView
       ref={mapRef}
       style={styles.map}
       customMapStyle={customMapStyle}
       showsUserLocation={true}
       followsUserLocation={true}
       showsBuildings={true}
       showsScale={true}
       loadingEnabled={true}
       pitchEnabled={true} // Enable pitch gestures
       zoomControlEnabled	={true}
       showsTraffic={true}
       addressForCoordinate={true}
       initialRegion={{
         latitude: 33.8869, 
         longitude: 9.5375, 
         latitudeDelta: 4, 
         longitudeDelta: 4, 
       }}
     >
       <MapViewDirections
         origin={userLocation}
         destination={destination}
         apikey="AIzaSyA6k67mLz5qFbAOpq2zx1GBX9gXqNBeS-Y"
         strokeWidth={10}
         strokeColor="grey"
         mode={'WALKING'}
       />
       {userLocation && (
         <Marker.Animated
           ref={markerRef}
           coordinate={userLocation}
           title="Current Location"
           // image={require('./path/to/navigate_marker.png')} // Replace with your navigate marker image
         />
       )}
       <Marker coordinate={destination} title="Destination Point" />
     </MapView>
     <TouchableOpacity onPress={() => startIteniraire()}>
       <Text>START</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => stopIteniraire()}>
       <Text>STOP</Text>
     </TouchableOpacity>
   </View>
 );
};

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
});
const customMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#c9f2c6", // Land color
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off", // Turn off all icons
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#aadaff", // Turquoise water color
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff", // Grey clair streets color
      },
    ],
  },
];

export default UserMapView;
