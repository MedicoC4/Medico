import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const OrderDetails = ({ pharmacy, userId, order }) => {
  const navigation = useNavigation();
  if (!order) {
    return null; // or return a loading spinner, or some fallback UI
  }
  const getStatusColors = (status) => {
    switch (status) {
      case 'Accepted':
        return { container: '#ddf0ee', text: '#2d958c' };
      case 'Rejected':
        return { container: '#FF7F7F', text: '#C8102E' };
      case 'Pending':
      default:
        return { container: '#FFD699', text: '#FFA500' };
    }
  };

  const colors = getStatusColors(order.orderStatus);

  return (
    <View style={styles.card}>
      <View style={styles.statusContainer}>
        <View style={[styles.processingContainer, { backgroundColor: colors.container }]}>
          <Text style={[styles.processingText, { color: colors.text }]}>{order.orderStatus}</Text>
        </View>
        {order.orderStatus === 'Accepted' && (
  order.isPayed === false ? (
    <TouchableOpacity style={[styles.processingContainer, { backgroundColor: colors.container }]} onPress={() => navigation.navigate('checkout', { orders: order })}>
      <Text style={[styles.processingText, { color: colors.text }]}>Checkout</Text>
    </TouchableOpacity>
  ) : order.isPayed === true ? (
    <View style={[styles.processingContainer, { backgroundColor: getStatusColors(order.livraisonStatus).container }]}>
      <Text style={[styles.processingText, { color: getStatusColors(order.livraisonStatus).text }]}>
        Shipping Status: {order.livraisonStatus}
      </Text>
    </View>
  ) : null
)}
      </View>
      <Text style={styles.fromText}>From: {order.Product.Pharmacy.PHname} </Text>
      <View style={styles.separator} />
      <View style={styles.orderDetails}>
        <View style={styles.orderDetailItem}>
          <MaterialCommunityIcons name="pill" size={20} color="#198b81" />
          <Text style={styles.drugsText}>{order.quantityOrdered} item(s)</Text>
        </View>
        <View style={styles.separatorVertical} />
        <View style={styles.orderDetailItem}>
          <FontAwesome5 name="money-bill-wave" size={20} color="#198b81" />
          <Text style={styles.totalText}>{order.total} TND </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 30,
    padding: 19,
    backgroundColor: "#f8f8f8",
    marginTop: 30,
    marginHorizontal: 10,
    width: width * 0.9, // 90% of the window's width
    height: height * 0.2, // 30% of the window's height
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
    backgroundColor: "#FFD699",
    borderRadius: 20,
    padding: 5,
    alignSelf: "flex-start",
    width: width * 0.35, // 80% of the window's width
    height: height * 0.04, // 20% of the window's height
    justifyContent: "center",
    alignItems: "center",
  },
  processingText: {
    color: "#FFA500",
    fontSize: width * 0.03, // 3% of the window's width
  },
  fromText: {
    fontSize: width * 0.04, // 4% of the window's width
    marginTop: 10,
    fontWeight: "bold"
  },
  separator: {
    height: 1,
    backgroundColor: "#000",
    marginVertical: height * 0.02, // 2% of the window's height
  },
  orderDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  orderDetailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: width * 0.08, // 8% of the window's width
    marginLeft: width * 0.08, // 8% of the window's width
  },
  drugsText: {
    marginLeft: width * 0.02, // 2% of the window's width
    fontWeight: "bold"
  },
  separatorVertical: {
    width: 1,
    height: "100%",
    backgroundColor: "#000",
  },
  totalText: {
    marginLeft: width * 0.02, // 2% of the window's width
    fontWeight: "bold"
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkoutButton: {
    borderRadius: 20,
    padding: width * 0.01, // 1% of the window's width
    marginLeft: width * 0.4, // 40% of the window's width
  },
});

export default OrderDetails;