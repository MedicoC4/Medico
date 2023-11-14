import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
const {width,height}= Dimensions.get('window')
import Icon from 'react-native-vector-icons/FontAwesome';

const ReviewCardDoctor = () => {
  return (
    <View style={{
        width:width*0.8,
        height:height*0.26,
        backgroundColor:COLORS.white,
        borderRadius:20,
        elevation: 10,
shadowColor: 'grey',
display:'flex',
flexDirection:'column',
padding:20,

    }}>
        <View style={{
            height:height*0.07,
        }}>
        <Image
        source={require('../assets/doctoura.jpg')}
        style={{
            width:width*0.2,
            height:height*0.095,
            borderRadius:50,
            position:'absolute',
            top:-60,
            left:95
        }}
        />
        </View>
        {/* <Text>hello</Text> */}
        <View style={{
            display:'flex',
            flexDirection:'column',
            gap:10
        }}>
            <Text style={{
                fontSize:20,
                fontWeight:600
            }}>User Name</Text>
            
        <View style={{
            display:'flex',
            flexDirection:'row'
        }}>
        <Icon name="star" size={15} color="#FFD700" />
        <Text >4.5</Text>

        </View>
        <Text style={{
            fontSize:20,
            fontWeight:500
        }}>
            Mrigl, Keep the good work
        </Text>
      </View>


    </View>
  )
}

export default ReviewCardDoctor

const styles = StyleSheet.create({})