import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const MedicineDetails = ({ route }) => {
  const { medicine } = route.params;
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={25} color="grey" />
        </TouchableOpacity>
        <Text style={styles.detailsText}>Details</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Icon name="bell-o" size={25} color="grey" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="cart-outline" size={25} color="grey" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{...styles.container, flex: 1}}>
        <Image source={{ uri: medicine.image }} style={styles.image} />
        <Text style={styles.name}>{medicine.name}</Text>
        <View style={styles.priceAndQuantityContainer}>
          <Text style={styles.price}>{medicine.price} TND</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decrementQuantity}>
              <Text style={styles.quantityChange}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQuantity}>
              <Text style={styles.quantityChange}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.subtotal}>Subtotal: ${medicine.price * quantity}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  detailsText: {
    fontWeight: 'bold',
    fontSize: 35,
    marginLeft: 10,
  },
  icons: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 7,
    marginRight: 10,
    backgroundColor: '#E8E8E8',
    borderColor: '#D3D3D3',
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  priceAndQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
  },
  subtotal: {
    fontSize: 18,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#D3D3D3',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  addToCartButton: {
    backgroundColor: 'grey',
    padding: 10,
    width: '45%',
    alignItems: 'center',
    borderRadius: 20,
  },
  addToCartText: {
    color: 'white',
  },
  buyNowButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    width: '45%',
    alignItems: 'center',
    borderRadius: 20,
  },
  buyNowText: {
    color: 'white',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
  },
  quantityChange: {
    fontSize: 25,
    color: 'grey',
  },
  quantity: {
    fontSize: 18,
  },
});

export default MedicineDetails;