import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PharmacyCard = ({ pharmacy }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pharmacy.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{pharmacy.name}</Text>
        <View style={styles.ratingDistanceContainer}>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={20} color="#FFD700" />
            <Text style={styles.rating}>{pharmacy.rating}</Text>
          </View>
          <View style={styles.distanceContainer}>
            <Icon name="map-marker" size={20} color="#000" />
            <Text style={styles.distance}>{pharmacy.distance} km</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      flexDirection: 'column',
      margin: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 3,
      alignItems: 'center',
      height: 180, // Default height
      width: 200, // Default width
    },
    image: {
      width: 160,
      height: 100,
      borderRadius: 10,
    },
    infoContainer: {
      marginLeft: 10,
      flex: 1, // Take up remaining space
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center', // Center the text
    },
    ratingDistanceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rating: {
      marginLeft: 5,
      textAlign: 'center', // Center the text
    },
    distanceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    distance: {
      marginLeft: 5,
      textAlign: 'center', // Center the text
    },
  });

export default PharmacyCard;