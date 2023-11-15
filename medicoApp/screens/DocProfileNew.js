import { StyleSheet, Text, View, Image,TouchableOpacity,Dimensions,ImageBackground,FlatList,ScrollView } from 'react-native'
import React,{useEffect} from 'react'
const {width,height}= Dimensions.get('window')
import Button from '../components/Button'
import COLORS from '../constants/colors'
import NavigationBar from '../components/NavigationBar'
import Icon from "react-native-vector-icons/FontAwesome";
import ReviewCardDoctor from '../components/ReviewCardDoctor'
import { AntDesign } from "@expo/vector-icons";
import {fetchDocReviews} from '../redux/docReviewSlicer'
import { useDispatch, useSelector } from 'react-redux'
// import { TextInput } from 'react-native-gesture-handler'



const DocProfileNew = ({navigation,route}) => {
  const dispatch=useDispatch()


  const reviews=useSelector((state)=>state.docRev.data)
  const fetchReviews= ()=>{
    dispatch(fetchDocReviews(data.id))
}
useEffect(() => {
  fetchReviews()
  
}, []);

  const {data} = route.params

  return (
    <View style={{
        display:'flex',
        flexDirection:'column',
        flex:1,
        alignItems:'center',
        gap:9
    }}>
        <View style={{
            width:width*1,
            height:height*0.48
        }}>
        <ImageBackground
        source={require('../assets/doctoura.jpg')}
        resizeMode="cover"
        style={{width:width*1,
            height:height*0.37,
            flex: 1,
            justifyContent: 'flex-start',
            padding:30
        
        
        
        }}
        >
            <View style={{
                display:"flex",
                flexDirection:'row',
                justifyContent:'space-between'
            }}>
            <TouchableOpacity
            style={{
                backgroundColor:COLORS.white,
            width:width*0.1,
            height:height*0.05,
            borderRadius:200,
            alignItems:'center',
            justifyContent:'center'
            }}>
                <Image
                source={require('../assets/arrowback.png')}
                style={{
                    width:width*0.07,
                    height:height*0.02
                }}
                />
            </TouchableOpacity>

            <TouchableOpacity
            style={{
                backgroundColor:COLORS.white,
            width:width*0.1,
            height:height*0.05,
            borderRadius:200,
            alignItems:'center',
            justifyContent:'center'
            }}>
                <Image
                source={require('../assets/menu.png')}
                style={{
                    width:width*0.08,
                    height:height*0.03
                }}
                />
            </TouchableOpacity>
            </View>
            <View
            style={{
                width:width*0.9,
                height:height*0.15,
                backgroundColor:COLORS.white,
                position:'absolute',
                top:230,
                left:20,
                borderRadius:20,
                elevation: 10,
                justifyContent:'space-between',
    shadowColor: 'grey',
    display:'flex',
    flexDirection:'row'
            }}
            >
                <View 
                style={{
                    display:'flex',
                    flexDirection:'column',
                    gap:20
                }}
                >
                    <View style={{
                        paddingTop:12,
                        paddingLeft:27
                    }}>
                    <Text style={{
                        fontSize:20,
                        fontWeight:600
                    }}>Dr. {data.fullname}</Text>
                    <Text style={{
                        fontSize:15,
                        fontWeight:400,
                        color:COLORS.grey
                    }}>Doctor Speciality</Text>
                    </View>

                    <View style={{
                        display:'flex',
                        flexDirection:'row'
                    }}>
                        <View style={{
                            paddingLeft:20,
                            display:"flex",
                            flexDirection:'row',
                            alignItems:'center',
                            gap:10
                        }}>
                            <Image 
                            source={require('../assets/approved.png')}
                            style={{width:width*0.065,
                            height:height*0.031}}
                            />
                            <Text style={{
                                fontWeight:600
                            }}>Doctor</Text>
                        </View>
                        <View style={{
                            paddingLeft:20,
                            display:"flex",
                            flexDirection:'row',
                            alignItems:'center',
                            gap:10
                        }}>
                            <Image 
                            source={require('../assets/gps.png')}
                            style={{width:width*0.062,
                            height:height*0.030}}
                            />
                            <Text style={{
                                fontWeight:600
                            }}>1.6 km</Text>
                        </View>
                    </View>
                    
                </View>
                <View style={{
                    display:'flex',
                    flexDirection:'column',
                    padding:20,
                    alignItems:'center',
                    gap:12
                }}>
                    <View style={{
                        backgroundColor:COLORS.primary,
                        width:width*0.15,
                        alignItems:'center',
                        justifyContent:'center',
                        height:height*0.07,
                        borderRadius:20
                    }}>
                        <Text style={{
                            color:COLORS.white,
                            fontSize:20,
                            fontWeight:600
                        }}>5.0</Text>
                    </View>
                    <Text style={{
                        color:COLORS.grey,
                        fontWeight:600
                    }}>150 Reviews</Text>
                </View>


            </View>




        </ImageBackground>

        </View>

        <ScrollView contentContainerStyle={{
            paddingLeft:20,
            paddingRight:20,
            width:width*1,
            height:height*0.5,
            // alignItems:'center',
            
        }}>
            <View style={{
                // alignItems:'center',
                gap:10
            }}>
            <View style={{
                gap:15
            }}>
            <Text style={{
                fontSize:30,
                fontWeight:600
            }}>About Doctor</Text>
            <Text style={{
                color:COLORS.black,
                fontSize:18,
                // fontWeight:600
            }}>Hello, My name is Dr. Name. I'm specialized In hello whatever it says we gonna kill it </Text>
            </View>
            
            <Text style={{
              fontSize:20,
              fontWeight:600
            }}>Recent Reviews</Text>
      <View style={{
        // alignItems:'center',
        gap:15
      }}>
        <View style={{
          flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    // marginTop: 40,
    paddingRight:20
        }}>

        <TouchableOpacity style={{
          backgroundColor: "#ddf0ee",
          borderRadius: 20,
          paddingVertical: 3.5,
          paddingHorizontal: 13
        }}
        onPress={()=>navigation.navigate('AllReviews',
        {
          data : {
            doctor:data,
            review:reviews
          }
        }

        )}
        >
            <Text style={{
              color: "#2d958c",
              fontSize: 15,
            }}>SEE ALL</Text>
          </TouchableOpacity>
        </View>

            <View style={{
              alignItems:'center',
              gap:20
            }}>
{reviews.slice(0, 2).map((review, index) => (
  <ReviewCardDoctor key={review.id} review={review} />
))}
</View>
      </View>
        </View>
        </ScrollView>
        {/* <TextInput></TextInput> */}
        
        

     <NavigationBar/>
     
    </View>
  )
}

export default DocProfileNew

const styles = StyleSheet.create({})