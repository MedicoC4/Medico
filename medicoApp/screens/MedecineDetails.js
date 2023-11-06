import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const MedicineDetails = ({ route }) => {
  const { medicine } = route.params;
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [contraindications, setContraindications] = useState(
    medicine.contraindications || []
  );

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
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
              <MaterialCommunityIcons
                name="cart-outline"
                size={25}
                color="grey"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ ...styles.container, flex: 1 }}>
        <Image source={{ uri: medicine.image }} style={styles.image} />
        <Text style={styles.name}>{medicine.name}</Text>
        <View style={styles.priceAndQuantityContainer}>
          <Text style={styles.price}>Price : {medicine.price} TND</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decrementQuantity}>
              <View style={styles.minusButton}>
                <Text style={styles.quantityChange}>-</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQuantity}>
              <View style={styles.plusButton}>
                <Text style={styles.quantityChange}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.subtotal}>
          Sub total : {medicine.price * quantity} TND
        </Text>
        <Text style={styles.contraindicationsTitle}>Contraindications:</Text>
        {contraindications.map((contraindication, index) => (
          <Text key={index} style={styles.contraindication}>
            {contraindication}
          </Text>
        ))}
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
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
  },
  detailsText: {
    fontWeight: "bold",
    fontSize: 35,
    marginLeft: 10,
  },
  icons: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 7,
    marginRight: 10,
    backgroundColor: "#E8E8E8",
    borderColor: "#D3D3D3",
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "flex-start",
  },
  priceAndQuantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtotal: {
    fontSize: 18,
    marginTop: 10,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#D3D3D3",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  addToCartButton: {
    backgroundColor: "#bebebe",
    padding: 10,
    width: "45%",
    alignItems: "center",
    borderRadius: 20,
  },
  addToCartText: {
    color: "white",
  },
  buyNowButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    width: "45%",
    alignItems: "center",
    borderRadius: 20,
  },
  buyNowText: {
    color: "white",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  minusButton: {
    backgroundColor: "lightgray",
    borderRadius: 15, // Reduced from 20
    width: 25, // Reduced from 30
    height: 25, // Reduced from 30
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  plusButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 15, // Reduced from 20
    width: 25, // Reduced from 30
    height: 25, // Reduced from 30
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  quantityChange: {
    fontSize: 20,
    color: "white",
  },
  quantity: {
    fontSize: 18,
  },
  contraindicationsTitle: {
    fontSize: 24,
    marginTop: 40,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  contraindication: {
    fontSize: 16,
    marginTop: 10,
    alignSelf: "flex-start",
  },
});

export default MedicineDetails;
