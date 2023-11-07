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
import FeatherIcon from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { width, height } = Dimensions.get("window");
import COLORS from '../constants/colors';
import { DB } from '../firebase-config';
import { addDoc, collection, doc, serverTimestamp,setDoc } from "firebase/firestore";




export default function UpgradeDocFirstForm({navigation}) {
  const [yearOfEx , setYearOfEx]= useState('')
  const [specialite , setSpecialite]= useState('')


  
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
                
                style={styles.inputControl}
                
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Gender</Text>

              <TextInput
                value={yearOfEx}
                onChangeText={(e)=>{setYearOfEx(e)}}
                style={styles.inputControl}
              />
            </View>
                
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email</Text>

              <TextInput
                value={specialite}
                onChangeText={(e)=>{setSpecialite(e)}}
                style={styles.inputControl}
              />

            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Phone</Text>

              <TextInput
                style={styles.inputControl}
              />
            </View>
            
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Years of Experience</Text>

              <TextInput

                style={styles.inputControl}
                
              />
            </View>
            <View style={styles.input}>
    

            </View>

            

            <View style={styles.formAction}>
            <Button
            onPress={() => navigation.navigate("UpgradeDocSecoundForm")}
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