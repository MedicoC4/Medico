import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const PaymentCard = ({ order }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Payment ID: {order.Product.Pharmacy.Payment.paymentIntentId}</Text>
      <Text style={styles.text}>Amount: {order.Product.Pharmacy.Payment.amount} TND</Text>
      <Text style={styles.text}>Date: {new Date(order.Product.Pharmacy.Payment.createdAt).toLocaleDateString()}</Text>
      <View style={styles.iconContainer}>
        <Icon name="file-text-o" size={24} color="black" />
      </View>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: width * 0.025,
      margin: width * 0.025,
      borderRadius: width * 0.05, // Increase this value to make the cards more rounded
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    text: {
      fontSize: width * 0.04,
      marginBottom: height * 0.005,
    },
    iconContainer: {
        position: 'absolute',
        right: width * 0.025,
        bottom: height * 0.025,
      },
});