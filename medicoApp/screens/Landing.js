import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationBar from '../components/NavigationBar';

const Landing = () => {
  const userName = "Ahmed"; // Replace with actual user name
  const orders = 5; // Replace with actual number of orders
  const pharmacyName = "Pharmacy Masmoudi"; // Replace with actual pharmacy name
  const numberOfDrugs = 3; // Replace with actual number of drugs
  const orderTotal = 100; // Replace with actual order total

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
            <Icon name="medkit" size={20} color="#000" />
            <Text style={styles.drugsText}>{numberOfDrugs} item(s)</Text>
          </View>
          <View style={styles.separatorVertical} />
          <View style={styles.orderDetailItem}>
            <Icon name="money" size={20} color="#000" />
            <Text style={styles.totalText}>{orderTotal} tnd </Text>
          </View>
        </View>
      </View>
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