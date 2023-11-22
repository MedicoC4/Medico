import React, { useEffect, useState ,useRef} from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Button,
  Modal,
  ScrollView
} from "react-native";
import axios from "axios";

const PharmacyMap = ({dataPharmacies}) => {
    const[data,setData] = useState([])
    const getPharmacys = async ()=>{
      try {
        const dataPharma = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/pharmacy/pharmaLocationMapped/1/0`)
        setData(dataPharma.data)
          dataPharmacies(dataPharma.data)
        } catch (error) {
          throw new Error(error)
        }
      }
    
    const getPharmacysDN = async (type)=>{
        try {
          const dataPharma = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/pharmacy/getAllDN/1/0/${type}`)
          setData(dataPharma.data)
      
          dataPharmacies(dataPharma.data)

        } catch (error) {
          throw new Error(error)
        }
      }
  return (
    <View>
<View>
    <TouchableOpacity onPress={()=>getPharmacys()}>
      <Text>All Pharmacies</Text>  
    </TouchableOpacity>
</View>
<View>
    <TouchableOpacity onPress={()=>getPharmacysDN("day")}>
      <Text>Day</Text>  
    </TouchableOpacity>
</View>
<View>
    <TouchableOpacity onPress={()=>getPharmacysDN("night")}>
      <Text>Night</Text>  
    </TouchableOpacity>
</View>
    </View>
  )
}

export default PharmacyMap