import React, { useEffect, useState ,useRef} from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Button,
  Modal,
  ScrollView,
  TextInput
} from "react-native";
import axios from 'axios';

const ProductMap = () => {
  const [searchByName,setSearchByName] = useState([]) 
  const [inputVal,setInputVal] = useState("") 
console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",searchByName);
  const search = async (val)=>{
    try {
      const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/product/getProductByName/${val}`)
      setSearchByName(response.data)
    } catch (error) {
      throw new Error(error)
    }
  }

  const generateKey = (item) => {
    const pharmacyName = item.Pharmacy ? item.Pharmacy.PHname : 'UnknownPharmacy';
    return `${item.id}${item.productName}${pharmacyName}`;
  };

  useEffect(()=>{
    if(inputVal){
      search(inputVal)
    }
  },[inputVal])
  return (
    <View>
                <View><TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          paddingLeft: 10,
        }}
        placeholder="Type to search"
        onChangeText={(text) => setInputVal(text)}
        value={inputVal}
      /></View>
      <View>{searchByName.map((e)=>(
        <TouchableOpacity key={generateKey(e)} >
          <Text>{e.productName}</Text>
        </TouchableOpacity>
      ))}</View>

    </View>
  )
}

export default ProductMap