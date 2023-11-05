import { StyleSheet, Text, View,ScrollView,Dimensions,TextInput,KeyboardAvoidingView,Image } from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get('window');
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Settings = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    const handleSubmit = (e)=>{
        e.preventDefault()
    }

  return (
      <KeyboardAvoidingView style={{flex:1,
        justifyContent:'center',
        alignItems:'center'}}>
    <ScrollView contentContainerStyle={{flexGrow:1,
    justifyContent:'center',
    gap:30,
    alignItems:'center'}}>
        <Text
        style={{fontSize:35,
        fontWeight:600}}
        >Pesonal Details</Text>

                        <Image
                            source={require("../assets/hero1.png")}
                            style={{
                                height: height*0.15,
                                width: width*0.35,
                            }}
                        />

        <View>
          <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Edit your email :</Text>

                    <View style={{
                        width: width*0.89,
                        height: height*0.06,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Edit your email'
                            placeholderTextColor={COLORS.black}
                            // keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                            onChangeText={(text)=>{setEmail(text)}}
                            onSubmit={handleSubmit}
                        />
                    </View>
                </View>
        
          <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Edit your name :</Text>

                    <View style={{
                        width: width*0.89,
                        height: height*0.06,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Edit your name'
                            placeholderTextColor={COLORS.black}
                            // keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                            onChangeText={(text)=>{setName(text)}}
                            onSubmit={handleSubmit}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Change password :</Text>

                    <View style={{
                        width: width*0.89,
                        height: height*0.06,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Change password'
                            placeholderTextColor={COLORS.black}
                            // keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                            onChangeText={(text)=>{setPassword(text)}}
                            onSubmit={handleSubmit}
                        />
                    </View>
                </View>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Confirm your password :</Text>

                    <View style={{
                        width: width*0.89,
                        height: height*0.06,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Confirm Password'
                            placeholderTextColor={COLORS.black}
                            // keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                            // onChangeText={(text)=>{setName(text)}}
                            onSubmit={handleSubmit}
                        />
                    </View>
                </View>
                    </View>
                <Button
              titleStyle={{
                color: "#FFFFFF"
             }}
            title="Submit"
            filled
            style={{
                            width: width*0.89,
                            backgroundColor: COLORS.primary,
                            color: COLORS.white
                        }}
                    />
      
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Settings

const styles = StyleSheet.create({})