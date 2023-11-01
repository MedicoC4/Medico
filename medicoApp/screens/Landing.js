import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PharmacyCard from './PharmacyCard';
import NavigationBar from '../components/NavigationBar';

const Landing = () => {
  const userName = "Ahmed"; // Replace with actual user name
  const orders = 1; // Replace with actual number of orders
  const pharmacyName = "Pharmacy Masmoudi"; // Replace with actual pharmacy name
  const numberOfDrugs = 3; // Replace with actual number of drugs
  const orderTotal = 100; // Replace with actual order total

  const pharmacies = [
    {
      name: 'Pharmacy Masmoudi',
      image: 'https://static1.lequotidiendupharmacien.fr/cdn/ff/zzKpsdTgDf4zJJAQLEKGfvN9SiuClrByPAJqIXxpBZg/1587729668/public/styles/gps_large/public/public/67237_img_34286_hr.png?itok=vrhqNYWQ', // Replace with actual image URL
      rating: 4,
      distance: 3,
    },
    {
      name: 'Pharmacy Khlifi',
      image: 'https://www.med.tn/uploads/pharmacy/8262_pharmacie-neira-smida-hamza_1590053166.jpg', // Replace with actual image URL
      rating: 4.5,
      distance: 2,
    },
    {
      name: 'Pharmacy Yanes',
      image: 'https://pharmacie.ma/uploads/0f369a47de133d19ce8d70469fc44d93_1503576291.jpeg', // Replace with actual image URL
      rating: 4.5,
      distance: 1.7,
    },
    // Add more pharmacies here...
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greeting}>
          <Text style={styles.helloText}>Hello,</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
        <View style={styles.icons}>
          <View style={styles.iconContainer}>
            <Icon name="bell" size={20} color="#000" style={styles.icon} />
          </View>
          <View style={styles.iconContainer}>
            <Icon name="shopping-cart" size={20} color="#000" />
          </View>
        </View>
      </View>
      <View style={styles.ordersContainer}>
        <Text style={styles.ordersText}>Current orders ({orders})</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SEE ALL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.processingContainer}>
          <Text style={styles.processingText}>PROCESSING</Text>
        </View>
        <Text style={styles.fromText}>From: {pharmacyName}</Text>
        <View style={styles.separator} />
        <View style={styles.orderDetails}>
          <View style={styles.orderDetailItem}>
            <Icon name="medkit" size={20} color="#008000" />
            <Text style={styles.drugsText}>{numberOfDrugs} item(s)</Text>
          </View>
          <View style={styles.separatorVertical} />
          <View style={styles.orderDetailItem}>
            <Icon name="money" size={20} color="#008000" />
            <Text style={styles.totalText}>{orderTotal} tnd </Text>
          </View>
        </View>
      </View>
      <View style={styles.secondOrdersContainer}>
        <Text style={styles.ordersText}>Pharmacies near you</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SEE ALL</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={pharmacies}
        renderItem={({ item }) => <PharmacyCard pharmacy={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true} // Make the list horizontal
      />
      {/* <NavigationBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  greeting: {
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  helloText: {
    fontSize: 20,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 35,
  },
  icons: {
    flexDirection: 'row',
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    marginRight: 10,
  },
  ordersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 80,
  },
  secondOrdersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40, // Adjust this value as needed
  },
  ordersText: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#008000',
  },
  buttonText: {
    color: '#008000',
    fontSize: 15,
  },
  card: {
    borderRadius: 30,
    padding: 19,
    backgroundColor: '#f8f8f8',
    marginTop: 30,
    marginHorizontal: 10,
    height: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  processingContainer: {
    backgroundColor: '#FFD699',
    borderRadius: 20,
    padding: 5,
    alignSelf: 'flex-start',
  },
  processingText: {
    color: '#FFA500',
    fontSize: 13,
  },
  fromText: {
    fontSize: 16,
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 15,
  },
  orderDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30,
  },
  drugsText: {
    marginLeft: 10,
  },
  separatorVertical: {
    width: 1,
    height: '100%',
    backgroundColor: '#000',
  },
  totalText: {
    marginLeft: 10,
  },
});

export default Landing;