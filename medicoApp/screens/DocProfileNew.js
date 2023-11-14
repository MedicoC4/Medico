import { StyleSheet, Text, View, Image,TouchableOpacity,Dimensions,ImageBackground,FlatList,ScrollView } from 'react-native'
import React from 'react'
const {width,height}= Dimensions.get('window')
import Button from '../components/Button'
import COLORS from '../constants/colors'
import NavigationBar from '../components/NavigationBar'
import Icon from "react-native-vector-icons/FontAwesome";
import ReviewCardDoctor from '../components/ReviewCardDoctor'
import { AntDesign } from "@expo/vector-icons";


const DocProfileNew = ({navigation,route}) => {

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
                    }}>Dr. Doctor Name</Text>
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
            <View style={{ height: "46%" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: width*0.9,
            justifyContent: "space-between",
            height: height*0.1,
            alignItems: "center",
          }}
          onPress={()=>{navigation.navigate('AddRatings',{
            data : {
              doctor:data
            }
          })}}
        >
          <View
            style={{
              flexDirection: "row",
              width: "55%",
              gap: 23,
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 60,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                shadowColor: "rgba(3, 3, 3, 0.1)",
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 4,
                backgroundColor: "#ddf0ee",
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 100,
                  shadowColor: "rgba(3, 3, 3, 0.1)",
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 4,
                  backgroundColor: "#ddf0ee",
                }}
              >
                <Image
                  source={require("../assets/personalDetails.png")}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
            </View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Add Review
            </Text>
          </View>
          <View
          >
            <AntDesign name="right" size={24} color="#1a998e" />
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            height: 2,
            backgroundColor: "#dedede",
            borderRadius: 2,
          }}
        ></View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: width*0.9,
            justifyContent: "space-between",
            height: height*0.1,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "55%",
              gap: 23,
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 60,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                shadowColor: "rgba(3, 3, 3, 0.1)",
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 4,
                backgroundColor: "#ddf0ee",
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 100,
                  shadowColor: "rgba(3, 3, 3, 0.1)",
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 4,
                  backgroundColor: "#ddf0ee",
                }}
              >
                <Image
                  source={require("../assets/payment.png")}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
            </View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>All Reviews</Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="#1a998e" />
          </View>
        </TouchableOpacity>
      </View>
      {/* <View style={{
        alignItems:'center'
      }}>

        <ReviewCardDoctor/>
      </View> */}
        </View>
        </ScrollView>
        
        

     <NavigationBar/>
    </View>
  )
}

export default DocProfileNew

const styles = StyleSheet.create({})