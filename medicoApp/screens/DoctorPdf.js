import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import Button from '../components/Button';
import COLORS from '../constants/colors';
import * as DocumentPicker from 'expo-document-picker';
// import { DocumentPicker } from 'expo-document-picker';
const { width, height } = Dimensions.get("window");

const DoctorPdf = () => {
  const [document, setDocument] = useState({ assets: [{ name: '' }] });

  const [uri , setUri] = useState('')
  const [type , setType] = useState('')
  const [name , setName] = useState('')


  const  pickDocument = async () => {

      let result = await DocumentPicker.getDocumentAsync({});
      setDocument(result)
      // alert(result.uri);
      
      if (result) {
        setUri(document.assets[0].uri)
        setType(document.assets[0].mimeType)
        setName(document.assets[0].name)
       

      }

      }
useEffect(()=>{
  console.log(document.assets[0].name);
},[])

  return (
    <View style={{
      flex:1,
      alignItems:'center',
    justifyContent:'center',
    gap:50}}>
      <Text 
      
      style={{
        fontSize: 40,
        fontWeight: 800,
        textAlign:'center'
      }}>
        Insert Your document please!
      </Text>
      <Image
      source={require('../assets/step3.png')}
      style={{
        height:height*0.3,
        width:width*0.9
      }}/>

      {/* <View
      style={{display:'flex',
      justifyContent:'center',
      width:width*0.8,
      height:height*0.08,
      backgroundColor:COLORS.grey,
        borderRadius:30,
        alignItems:'center',
        
      }}>
      <Text style={{fontWeight:600}}>
      {document.assets[0].name}
      </Text>
      </View> */}
      
      {document && document.assets && document.assets[0] && document.assets[0].name && (
  <View
    style={{
      display: 'flex',
      justifyContent: 'center',
      width: width * 0.8,
      height: height * 0.08,
      backgroundColor: COLORS.grey,
      borderRadius: 30,
      alignItems: 'center'
    }}
  >
    <Text>
      {document.assets[0].name}
    </Text>
  </View>
)} 
      



      
      <View 
      style={{
        gap:20
      }}
      
      >
    <Button
    title="Select Document"
    onPress={pickDocument}
    filled
    style={{
      width:width*0.95}}
    />
        <Button
    title="Send Document"
    // onPress={pickDocument}
    // filled
    style={{
      width:width*0.95}}
    />
    </View>
    </View>
  )
}

export default DoctorPdf

const styles = StyleSheet.create({})