import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../redux/reviewSlicer';
import ReviewCard from '../components/ReviewCard';
import ReviewInput from '../components/SubmitReview';

const MedicineDetails = ({ route }) => {
  const { medicine } = route.params
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const [allergies, setAllergies] = useState('null');
  const [pregnant, setPregnant] = useState('null');
  const [selectedImage, setSelectedImage] = useState(null);

  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews.data); // Select the reviews data from the Redux store

  useEffect(() => {
    dispatch(fetchReviews()); // Dispatch the fetchReviews action when the component mounts
    requestPermissions();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  };

  const selectFile = async () => {
    const result = await DocumentPicker.getDocumentAsync();
    if (result.type === 'success') {
      setSelectedFile(result);
    }
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      delete result.cancelled;
      setSelectedImage(result.assets[0].uri);
    }
  };

  const placeOrder = () => {
    // Implement your order placement logic here
    console.log('Order placed');
    toggleModal();
  };

  useEffect(() => {
    requestPermissions();
  }, []);

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
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Image source={{ uri: medicine.imageURL }} style={styles.image} />
        <Text style={styles.name}>{medicine.productName}</Text>
        <Text style={styles.info}>Strength: {medicine.strength}</Text>
<Text style={styles.info}>Manufacturer: {medicine.manufacturer}</Text>
<Text style={styles.info}>Packaging: {medicine.packaging}</Text>
<Text style={styles.info}>Description: {medicine.description}</Text>
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
        <Text style={styles.subtotal}>Sub total : {medicine.price * quantity} TND</Text>
        <Text style={styles.contraindicationsTitle}>Reviews:</Text>
        {reviews.map(review => (
  <ReviewCard review={review.review} key={review.id} />
))}
<ReviewInput />
      </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton} onPress={toggleModal}>
        <Text style={styles.buyNowText}>Place order</Text>
      </TouchableOpacity>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalQuestion}>Do you have allergies to medications, food, a vaccine component, or latex?</Text>
          <View style={styles.modalOptions}>
            <TouchableOpacity style={[styles.modalOption, allergies === 'yes' && styles.selectedOption]} onPress={() => setAllergies('yes')}>
              <Text style={allergies === 'yes' && styles.selectedOptionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalOption, allergies === 'no' && styles.selectedOption]} onPress={() => setAllergies('no')}>
              <Text style={allergies === 'no' && styles.selectedOptionText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalOption, allergies === "I don't know" && styles.selectedOption]} onPress={() => setAllergies("I don't know")}>
              <Text style={allergies === "I don't know" && styles.selectedOptionText}>I don't know</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.modalQuestion}>Are you pregnant?</Text>
          <View style={styles.modalOptions}>
            <TouchableOpacity style={[styles.modalOption, pregnant === 'yes' && styles.selectedOption2]} onPress={() => setPregnant('yes')}>
              <Text style={pregnant === 'yes' && styles.selectedOptionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalOption, pregnant === 'no' && styles.selectedOption2]} onPress={() => setPregnant('no')}>
              <Text style={pregnant === 'no' && styles.selectedOptionText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalOption, pregnant === "I don't know" && styles.selectedOption2]} onPress={() => setPregnant("I don't know")}>
              <Text style={pregnant === "I don't know" && styles.selectedOptionText}>I don't know</Text>
            </TouchableOpacity>
          </View>
          {/* Add more questions and options as needed */}
          <Text style={styles.modalQuestion}>Please upload prescription:</Text>
    <TouchableOpacity style={styles.uploadButton} onPress={selectImage}>
      <Text style={styles.uploadButtonText}>Upload Image</Text>
    </TouchableOpacity>
    {selectedImage && (
      <View style={styles.selectedImageContainer}>
        <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
      </View>
    )}
    <View style={styles.modalButtonContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
        <Text style={styles.closeText}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.placeOrderButton} onPress={placeOrder}>
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
        </View>
      </Modal>
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
    width: '100%',
    height: 200,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'flex-start',
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
    fontWeight: 'bold'
  },
  subtotal: {
    fontSize: 18,
    marginTop: 10,
    alignSelf: 'flex-start',
    fontWeight: 'bold'
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
    backgroundColor: '#bebebe',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusButton: {
    backgroundColor: 'lightgray',
    borderRadius: 15, // Reduced from 20
    width: 25, // Reduced from 30
    height: 25, // Reduced from 30
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  plusButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 15, // Reduced from 20
    width: 25, // Reduced from 30
    height: 25, // Reduced from 30
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  quantityChange: {
    fontSize: 20,
    color: 'white',
  },
  quantity: {
    fontSize: 18,
  },
  contraindicationsTitle: {
    fontSize: 24,
    marginTop: 40,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  contraindication: {
    fontSize: 16,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },

  modalOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  uploadButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    width: '45%',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  uploadButtonText: {
    color: 'white',
  },
  selectedImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  placeOrderButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    width: '45%',
    alignItems: 'center',
    borderRadius: 20,
  },
  placeOrderText: {
    color: 'white',
  },
  closeButton: {
    backgroundColor: '#bebebe',
    padding: 10,
    width: '45%',
    alignItems: 'center',
    borderRadius: 20,
  },
  closeText: {
    color: 'white',
  },
  modalQuestion: {
    fontWeight: 'bold',
    display: 'flex', // Add this line
    flexWrap: 'wrap', // Add this line
  },
  modalOption: {
    
    padding: 10, // Increase padding
    borderRadius: 20, // Increase border radius
    marginRight: 10,
    alignItems: 'center', // Center the text
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
    color: 'white', // Make the text white
  },
  selectedOptionText: {
    color: 'white', // Make the text white
  },
  selectedOption2: {
    backgroundColor: '#4CAF50',
    color: 'white', // Make the text white
  },
  info: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
});

export default MedicineDetails; 