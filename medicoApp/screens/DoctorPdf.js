import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button';
import COLORS from '../constants/colors';
// import DocumentPicker from 'react-native-document-picker';


const DoctorPdf = () => {

    // const selectDoc = async () => {
    //     try {
    //       const doc = await DocumentPicker.pick({
    //         type: [DocumentPicker.types.pdf],
    //         allowMultiSelection: true
    //       });
    //       const doc = await DocumentPicker.pickSingle()
    //       const doc = await DocumentPicker.pickMultiple({
    //         type: [DocumentPicker.types.pdf, DocumentPicker.types.images]
    //       })
    //       console.log(doc)
    //     } catch(err) {
    //       if(DocumentPicker.isCancel(err)) 
    //         console.log("User cancelled the upload", err);
    //       else 
    //         console.log(err)
    //     }
    //   }
  return (
    <View style={{flex:1,
    justifyContent:'center',
    alignItems:'center'}}>
      <Text>DoctorPdf</Text>
      <Button
      title='Upload'
      />
    </View>
  )
}

export default DoctorPdf

const styles = StyleSheet.create({})