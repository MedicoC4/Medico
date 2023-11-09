import React,{useState,useEffect} from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity, FlatList, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PharmacyCard from '../components/PharmacyCard';
import MedicineCard from '../components/MedicineCard'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NavigationBar from '../components/NavigationBar';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPharmacies } from '../redux/pharmacySlicer' // replace with actual path



const Landing = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const pharmacies = useSelector(state => state); // use state directly

  useEffect(() => {
    dispatch(fetchPharmacies());
  }, [dispatch]);

  const [user, setUser] = useState([]);

  console.log(pharmacies)

  


  let topRatedPharmacies = [];

  // if (pharmacies) {
  //   topRatedPharmacies = pharmacies.filter(pharmacy => pharmacy.rating >= 4.5);
  // }


  return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greeting}>
          <Text style={styles.helloText}>Hello,</Text>
          <Text style={styles.userName}>{user.name}</Text>
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
        <Text style={styles.ordersText}>Current orders </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SEE ALL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.processingContainer}>
          <Text style={styles.processingText}>PROCESSING</Text>
        </View>
        <Text style={styles.fromText}>From: </Text>
        <View style={styles.separator} />
        <View style={styles.orderDetails}>
          <View style={styles.orderDetailItem}>
          <MaterialCommunityIcons name="pill" size={20} color="#198b81" />
            <Text style={styles.drugsText}> item(s)</Text>
          </View>
          <View style={styles.separatorVertical} />
          <View style={styles.orderDetailItem}>
          <FontAwesome5 name="money-bill-wave" size={20} color="#198b81" />
            <Text style={styles.totalText}> TND </Text>
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
        renderItem={({ item }) => <PharmacyCard  />}
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
        renderItem={({ item }) => <PharmacyCard />}
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
  // data={}
  renderItem={({ item }) => <MedicineCard  />}
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