import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions,ImageBackground,ScrollView,TextInput,Modal } from 'react-native'
import React,{useState} from 'react'
import Button from '../components/Button'
const {width,height}= Dimensions.get('window')
import COLORS from '../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import { AirbnbRating } from 'react-native-ratings';
import NavigationBar from '../components/NavigationBar'



const PharProf = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{
      display:'flex',
      flexDirection:'column',
      // flex:1,
      alignItems:'center',
      justifyContent:'center',
      gap:9
  }}>
    <Modal
              animationType="fade"
              transparent={true}
              visible={isModalVisible}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={{
                    fontSize:20,
                    fontWeight:600
                  }}>
                    Rate Your Doctor
                  </Text>
                  <AirbnbRating
          size={15}
          reviewSize={25}
          onFinishRating={(value)=>{
            setRating(value)
          }}
          // Additional props like selectedColor and reviewColor can be added here
        />
                        <View>
                  <TouchableOpacity
                    
                    style={{
                      backgroundColor:COLORS.primary,
                      width:width*0.2,
                      height:height*0.05,
                      alignItems:'center',
                      justifyContent:'center',
                      borderRadius:20
                    }}
                    onPress={toggleModal}
                  >
                    <Text style={{
                      color:COLORS.white
                    }}>Close</Text>
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
        <View style={{
          width:width*1,
          height:height*0.52,
      }}>
      <ImageBackground
      source={require('../assets/pharmacyTest.jpg')}
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
      </ImageBackground>
      
      <View
          style={{
              width:width*1,
              height:height*0.2,
              backgroundColor:COLORS.white,
              borderEndEndRadius:20,
              elevation: 10,
              justifyContent:'center',
              alignItems:'center',
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
                      // paddingLeft:27
                      gap:10
                  }}>
                  <Text style={{
                      fontSize:20,
                      fontWeight:600,
                      textAlign:'center'
                  }}>Foulen's Pharmacy </Text>
                  <Text style={{
                      fontSize:15,
                      fontWeight:400,
                      textAlign:'center',

                      color:COLORS.grey
                  }}>123 Main Street, Anytown, USA 12345</Text>
                  </View>

                  <View style={{
                      display:'flex',
                      flexDirection:'row',
                      alignItems:'center',
                      justifyContent:'center',
                      gap:20
                  }}>
                    <TouchableOpacity>
                      <View style={{
                          display:"flex",
                          flexDirection:'row',
                          alignItems:'center',
                          justifyContent:'center',
                          gap:10,
                          borderWidth:1,
                          borderColor:'#E8E8E8',
                          borderRadius:10,
                          height:height*0.06,
                          width:width*0.3
                      }}>
                          
            <Icon name="star" size={19} color="#FFD700" />
                          <Text style={{
                              fontWeight:600
                          }}>3.5</Text>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <View style={{
                           display:"flex",
                           flexDirection:'row',
                           alignItems:'center',
                           justifyContent:'center',
                           gap:10,
                           borderWidth:1,
                           borderColor:'#E8E8E8',
                           borderRadius:10,
                           height:height*0.06,
                           width:width*0.3
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
                      </TouchableOpacity>
                      
                  </View>
                  
                  
    
       
      

                  
              </View>
              

          </View>
          {/* <View contentContainerStyle={{
          paddingLeft:20,
          paddingRight:20,
          width:width*1,
          height:height*1,
          flex:1,
          alignItems:'center',
          
      }}>
          <View style={{
              alignItems:'center',
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
      // onPress={()=>navigation.navigate('AllReviews',
      // {
      //   data : {
      //     doctor:data,
      //   }
      // }

      // )}
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
</View>
    </View>
      </View>
      </View> */}
      {/* <View style={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      gap:15
    }}>
      <TouchableOpacity
          style={{
              backgroundColor:COLORS.primary,
          width:width*0.1,
          height:height*0.05,
          borderRadius:200,
          alignItems:'center',
          justifyContent:'center'
          }}
          onPress={toggleModal}
          >
              <Image
              source={require('../assets/plus.png')}
              style={{
                  width:width*0.05,
                  height:height*0.025
              }}
              />
          </TouchableOpacity>
      <TextInput
              style={{
                height: 44,
                width:width*0.7,
                backgroundColor: "#fff",
                paddingHorizontal: 16,
                borderRadius: 12,
                fontSize: 15,
                fontWeight: "500",
                color: "#24262e",
              }}
              placeholder='type here...'
            />
            <TouchableOpacity
          style={{
              backgroundColor:COLORS.primary,
          width:width*0.1,
          height:height*0.05,
          borderRadius:200,
          alignItems:'center',
          justifyContent:'center'
          }}
          // onPress={handleReviewAdding}
          >
              <Image
              source={require('../assets/send.png')}
              style={{
                  width:width*0.05,
                  height:height*0.02
              }}
              />
          </TouchableOpacity>
            </View> */}
      </View>
   {/* <NavigationBar/> */}
    </View>
  )
}

export default PharProf

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: width*0.8,
    height: height*0.25,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
});