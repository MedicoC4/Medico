import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PharmacyCard2 = ({ pharmacy }) => {
    const pharmacies = [
        {
          name: 'Pharmacy Masmoudi',
          image: 'https://static1.lequotidiendupharmacien.fr/cdn/ff/zzKpsdTgDf4zJJAQLEKGfvN9SiuClrByPAJqIXxpBZg/1587729668/public/styles/gps_large/public/public/67237_img_34286_hr.png?itok=vrhqNYWQ', // Replace with actual image URL
          rating: 4,
          distance: 3,
          address: 'Rue de la Colombe, Tunis',
        },
        {
          name: 'Pharmacy Khlifi',
          image: 'https://www.med.tn/uploads/pharmacy/8262_pharmacie-neira-smida-hamza_1590053166.jpg', // Replace with actual image URL
          rating: 5,
          distance: 2,
          address: 'Rue de paris, Tunis',
        },
        {
          name: 'Pharmacy Yanes',
          image: 'https://pharmacie.ma/uploads/0f369a47de133d19ce8d70469fc44d93_1503576291.jpeg', // Replace with actual image URL
          rating: 4.5,
          address: 'Rue de la liberté, Tunis',
        },
        {
          name: 'Pharmacy Thabet',
          image: 'https://i.pinimg.com/564x/1f/f4/a0/1ff4a0ba5dd2dc730903bd897621fd8f.jpg', // Replace with actual image URL
          rating: 3.5,
          distance: 1.7,
          address: 'Rue de la Republic, Tunis',
        },
        // Add more pharmacies here...
      ];
  return (
    <View style={styles.card}>
      <Image source={{ uri: pharmacy.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{pharmacy.name}</Text>
        <Text style={styles.address}>{pharmacy.address}</Text>
        <View style={styles.hoursContainer}>
          <View style={styles.daysContainer}>
            <Text style={styles.days}>MON-FRI</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>OPEN FROM: 9AM - 6PM</Text>
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
    borderRadius: 20,
    elevation: 3,
    alignItems: 'center',
    width: 300,
  },
  image: {
    width: 280,
    height: 165,
    borderRadius: 20,
  },
  infoContainer: {
    width: '100%',
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: '#808080',
    marginTop: 5,
  },
  hoursContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Change this line
    alignItems: 'center', // Add this line
  },
  daysContainer: {
    padding: 10,
    backgroundColor: '#008000',
    borderRadius: 9,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    alignSelf: 'flex-start',
  },
  timeContainer: {
    padding: 10,
    backgroundColor: '#ddf0ee',
    borderRadius: 9,
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  days: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2d958c',
  },
});

export default PharmacyCard2;