import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions
} from 'react-native';
import Button from '../components/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { width, height } = Dimensions.get("window");
import COLORS from '../constants/colors';
import { doc, setDoc } from "firebase/firestore"; 
import { DB, auth } from '../firebase-config';
import { collection , addDoc } from 'firebase/firestore';
import {useSelector , useDispatch} from'react-redux'
import { migrateDoctor } from '../redux/doctorSlicer';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function UpgradeDocFirstForm({navigation}) {
  // const {data}=route.params

  const [fullName , setFullName]= useState('')
  const [age , setAge]= useState('')
  const [licence , setLicence]= useState('')
  const [description , setDescription]= useState('')

  // const docCollection = collection(DB , "doctors")
  // const create = async()=>{
  //     await addDoc(docCollection , {
  //     fullName : fullName,
  //      gender : gender,
  //      age : age,
  //      licence : licence,
  //      description : description
  //     })
  // }
  const dispatch = useDispatch()
  const docMigration = async()=>{
    const email = auth.currentUser.email
    const obj = {
      "fullname":fullName,
      "age":age,
      // "category":"exemple",
      "email": email,
    }
   dispatch(migrateDoctor(obj))
   navigation.navigate("UpgradeDocSecoundForm")
   await AsyncStorage.setItem('type', 'doctor');
  }

  const migration = useSelector((state)=>{
    state.doctor.data
  })



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4EFF3' }}>
      <View style={styles.container}>
        <View style={styles.header}>

          <Text style={styles.title}>Create Account</Text>
        </View>

        <KeyboardAwareScrollView>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Full Name</Text>

              <TextInput
                value={fullName}
                onChangeText={(e)=>{setFullName(e)}}
                style={styles.inputControl}
                
              />
            </View>

            {/* <View style={styles.input}>
              <Text style={styles.inputLabel}>Type</Text>

              <TextInput
                value={type}
                onChangeText={(e)=>{setType(e)}}
                style={styles.inputControl}
              />
            </View> */}
                
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Age</Text>

              <TextInput
                 value={age}
                 onChangeText={(e)=>{setAge(e)}}
                style={styles.inputControl}
              />

            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Category</Text>

              <TextInput
               value={licence}
               onChangeText={(e)=>{setLicence(e)}}
                style={styles.inputControl}
              />
            </View>
            
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Description</Text>

              <TextInput
               value={description}
               onChangeText={(e)=>{setDescription(e)}}
                style={styles.inputControl}
                
              />
            </View>
            <View style={styles.input}>
    

            </View>

            

            <View style={styles.formAction}>
            <Button

            onPress={() =>  docMigration()}
                  titleStyle={{
                    color: "#FFFFFF"
                 }}
                title="Continue"
                filled
                style={{
                                width: width*0.85,
                                backgroundColor: COLORS.primary,
                                color: COLORS.white
                            }}
                        />
            </View>
        
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    paddingHorizontal: 24,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffdada',
    marginBottom: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#181818',
    marginBottom: 36,
  },
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    color: '#9fa5af',
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginBottom: 6,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#24262e',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    marginBottom: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    backgroundColor: '#FD6B68',
    borderColor: '#FD6B68',
  },
});