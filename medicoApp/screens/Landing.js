import React,{useState,useEffect} from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity, FlatList, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PharmacyCard from '../components/PharmacyCard';
import MedicineCard from '../components/MedicineCard'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NavigationBar from '../components/NavigationBar';
import { useNavigation } from '@react-navigation/native';
import {auth,DB,fetchUserDataByEmail} from '../firebase-config'


const Landing = ({route}) => {

  const [userData, setUserData] = useState(null);
  const loggedUser=auth.currentUser.email
  const navigation=useNavigation()
  // const userh=auth.currentUser.email
  const orders = 1; // Replace with actual number of orders
  const pharmacyName = "Pharmacy Masmoudi"; // Replace with actual pharmacy name
  const numberOfDrugs = 3; // Replace with actual number of drugs
  const orderTotal = 100; // Replace with actual order total


  useEffect(() => {
    const userEmail = loggedUser; // Replace with the actual user's email.

    fetchUserDataByEmail(userEmail)
      .then((data) => {
        if (data) {
          // Data may contain multiple users, so you might want to access the first one.
          setUserData(data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

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
      rating: 5,
      distance: 2,
    },
    {
      name: 'Pharmacy Yanes',
      image: 'https://pharmacie.ma/uploads/0f369a47de133d19ce8d70469fc44d93_1503576291.jpeg', // Replace with actual image URL
      rating: 4.5,
      distance: 1.7,
      address: 'Rue de la liberté, Tunis',
    },
    {
      name: 'Pharmacy Thabet',
      image: 'https://i.pinimg.com/564x/1f/f4/a0/1ff4a0ba5dd2dc730903bd897621fd8f.jpg', // Replace with actual image URL
      rating: 3.5,
      distance: 1.7,
    },
    // Add more pharmacies here...
  ];

  const medicines = [
    {
      name: 'Doliprane 1000',
      image: 'https://www.med.tn/image-medicament-9816dd007411506ab2ce1249e99d2c8c.jpg', // Replace with actual image URL
    },
    {
      name: 'Gripex',
      image: 'https://galpharma.tn/wp-content/uploads/2019/09/Gripex-Adulte-12.jpg', // Replace with actual image URL
    },
    // Add more medicines here...
  ];

  let topRatedPharmacies = [];

  if (pharmacies) {
    topRatedPharmacies = pharmacies.filter(pharmacy => pharmacy.rating >= 4.5);
  }



  return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greeting}>
          <Text style={styles.helloText}>Hello,</Text>
          <Text style={styles.userName}>{loggedUser
          
          }</Text>
        </View>
        <View style={styles.icons}>
            <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Icon name="bell-o" size={25} color="grey" style={styles.icon} />
          </View>
          </TouchableOpacity>
            <TouchableOpacity>
          <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="cart-outline" size={25} color="grey" />
          </View>
            </TouchableOpacity>
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
          <MaterialCommunityIcons name="pill" size={20} color="#198b81" />
            <Text style={styles.drugsText}>{numberOfDrugs} item(s)</Text>
          </View>
          <View style={styles.separatorVertical} />
          <View style={styles.orderDetailItem}>
          <FontAwesome5 name="money-bill-wave" size={20} color="#198b81" />
            <Text style={styles.totalText}>{orderTotal} TND </Text>
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

      <View style={styles.secondOrdersContainer}>
        <Text style={styles.ordersText}>Top Rated Pharmacies</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SEE ALL</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={topRatedPharmacies}
        renderItem={({ item }) => <PharmacyCard pharmacy={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true} // Make the list horizontal
      />
      <View style={styles.secondOrdersContainer}>
  <Text style={styles.ordersText}>Medicines</Text>
  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllMedicines')}>
  <Text style={styles.buttonText}>SEE ALL</Text>
</TouchableOpacity>
</View>
<FlatList
  data={medicines}
  renderItem={({ item }) => <MedicineCard medicine={item} />}
  keyExtractor={(item, index) => index.toString()}
  horizontal={true} // Make the list horizontal
/>
<View style={{ height: 40 }} />
    </ScrollView>
    <NavigationBar/>
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
    padding: 7,
    marginRight: 10,
    backgroundColor: '#E8E8E8',
    borderColor: '#D3D3D3', // Add this line
  },
  ordersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 55,
  },
  secondOrdersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40, // Adjust this value as needed
  },
  ordersText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#ddf0ee',
    borderRadius: 20,
    paddingVertical: 3.5,
    paddingHorizontal: 13,
  
    
  },
  buttonText: {
    color: '#2d958c',
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