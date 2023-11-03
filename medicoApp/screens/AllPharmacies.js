import React, { useState, useEffect } from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity,  ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PharmacyCard from './PharmacyCard2';
import lense from '../assets/lense.png'
import MedicineCard from './MedicineCard'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NavigationBar from '../components/NavigationBar';
import { useNavigation } from '@react-navigation/native';


const AllPharmacies = () => {
    const navigation=useNavigation()
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
      rating: 5,
      distance: 2,
    },
    {
      name: 'Pharmacy Yanes',
      image: 'https://pharmacie.ma/uploads/0f369a47de133d19ce8d70469fc44d93_1503576291.jpeg', // Replace with actual image URL
      rating: 4.5,
      distance: 1.7,
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

  const [search, setSearch] = useState('');
    const [filteredPharmacies, setFilteredPharmacies] = useState([]);

    useEffect(() => {
        setFilteredPharmacies(
            pharmacies.filter((pharmacy) =>
                pharmacy.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search]);

  return (
    <View style={{ flex: 1 }}>
        <View style={styles.header}>
            <Text style={styles.pharmaciesText}>Pharmacies</Text>
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
        <View style={styles.searchContainer}>
            <Image source={lense} style={styles.searchIcon} />
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                onChangeText={text => setSearch(text)}
                value={search}
            />
        </View>
        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {filteredPharmacies.map((pharmacy, index) => (
                    <PharmacyCard key={index} pharmacy={pharmacy} />
                ))}
            </View>
            <View style={{ height: 40 }} />
        </ScrollView>
        <NavigationBar />
    </View>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 50,
    },
    pharmaciesText: {
        fontWeight: 'bold',
        fontSize: 35,
        marginLeft: 20, // Add this line
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
  searchBar: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
    marginTop: 40, // Increase this value
    marginLeft: 30,
    marginRight: 30,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  searchBar: {
    flex: 1,
    padding: 10, // Reduce this value
  },
});

export default AllPharmacies;