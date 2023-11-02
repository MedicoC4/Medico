import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button';
import COLORS from '../constants/colors';
// import DocumentPicker from 'react-native-document-picker';
import * as DocumentPicker from 'expo-document-picker';

const DoctorPdf = () => {
  
    pickDocument = async () => {

      let result = await DocumentPicker.getDocumentAsync({});
      
      // alert(result.uri);
      
      console.log(result);
      
      }


  return (
    <Button
    title="Select Document"
    onPress={pickDocument}
    style={{top:500,width:400}}
    />
  )
}

export default DoctorPdf

const styles = StyleSheet.create({})