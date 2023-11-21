import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions,ImageBackground,ScrollView,TextInput,Modal,FlatList,KeyboardAvoidingView} from 'react-native'
import React,{ useState , useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Button from '../components/Button'
const {width,height}= Dimensions.get('window')
import COLORS from '../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import { AirbnbRating } from 'react-native-ratings';
import NavigationBar from '../components/NavigationBar'
import PharmacyCardProfile from '../components/PharmacyCardProfile'
import axios from 'axios'
import {auth} from '../firebase-config'
import { useNavigation } from '@react-navigation/native';
import ReviewCardPhar from '../components/ReviewCardPhar'





const PharProf = ({route}) => {

  const navigation=useNavigation()


  const data= route.params.pharmacy

  console.log('pharmacy jeeet',data);

  const [comment,setComment]=useState('')
  const [rating,setRating]=useState('')
  const [allReviews,setAllReviews]=useState([])

  const fetchReviewsForPhar=async()=>{
    try {
      const get= await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/reviews/getAllPh/${data.id}`)
      const reviews=get.data
      setAllReviews(reviews)
    } catch (error) {
      throw error
    }
  }
  console.log('these are all reviews from the phar prof',allReviews.Reviews);

  

  const handleReviewsCreation=async(e)=>{
    e.preventDefault()

      try {
        const pharmacyId =data.id
        let email = auth.currentUser.email
      
        const newReview = {
          pharmacyId,
          email,
          rating,
          comment
      }
      console.log('this is the pharmacy new Review',newReview);
      const create = await axios.post(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/reviews/createRevPh`,newReview)
      fetchReviewsForPhar()
      setComment('');
      setRating('')
      console.log('this is the creation data',create.data); 
      } catch (error) {
        console.log(error);
      }

}

  useEffect(()=>{
    fetchReviewsForPhar()
  },[])

  const medicines = [
    {
      name: 'Doliprane 1000',
      image: 'https://www.med.tn/image-medicament-9816dd007411506ab2ce1249e99d2c8c.jpg', // Replace with actual image URL
    },
    {
      name: 'Gripex',
      image: 'https://galpharma.tn/wp-content/uploads/2019/09/Gripex-Adulte-12.jpg', // Replace with actual image URL
    },
    
  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <KeyboardAwareScrollView>
    <View style={{
      display:'flex',
      flexDirection:'column',
      // flex:1,
      alignItems:'center',
      justifyContent:'center',
      gap:3
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
                    Rate Your Pharmacy
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
              height:height*0.94
            }}>
        <View style={{
          width:width*1,
          height:height*0.3,
      }}>
      <ImageBackground
      source={data.iimageUrl}
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
      </View>
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
              flexDirection:'column',
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
                      gap:10
                  }}>
                  <Text style={{
                      fontSize:20,
                      fontWeight:600,
                      textAlign:'center'
                  }}>{data.PHname}'s Pharmacy</Text>
                  <Text style={{
                      fontSize:15,
                      fontWeight:400,
                      textAlign:'center',

                      color:COLORS.grey
                  }}>{data.adress}</Text>
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
                          }}>{(data.rating?(data.rating).toFixed(1):"No rating yet")}</Text>
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
          <ScrollView style={{
                height:height*0.6}}>
                    
        <View style={styles.secondOrdersContainer}>
        <Text style={styles.ordersText}>Recent Ratings</Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>navigation.navigate('AllMissingProducts')}>
          <Text style={styles.buttonText}>SEE ALL</Text>
        </TouchableOpacity>
      </View>
        <FlatList
        data={allReviews.Reviews}
        renderItem={({ item }) => <ReviewCardPhar allReviews={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true} // Make the list horizontal
        />

                <View style={styles.secondOrdersContainer}>
        <Text style={styles.ordersText}>Client's Choice</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SEE ALL</Text>
        </TouchableOpacity>
      </View>
        <FlatList
        data={medicines}
        renderItem={({ item }) => <PharmacyCardProfile pharmacy={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true} // Make the list horizontal
        />

    <View style={styles.secondOrdersContainer}>
        <Text style={styles.ordersText}>Promotions</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SEE ALL</Text>
        </TouchableOpacity>
      </View>
        <FlatList
        data={medicines}
        renderItem={({ item }) => <PharmacyCardProfile pharmacy={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true} // Make the list horizontal
        />
        
</ScrollView>
<View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        gap:15,
        height:height*0.06,
       
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
                  height: height*0.05,
                  width:width*0.7,
                  backgroundColor: "#fff",
                  paddingHorizontal: 16,
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: "500",
                  color: "#24262e",
                }}
                value={comment}
                placeholder='type here...'
                onChangeText={(text)=>{
                    setComment(text)
                }}
                
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
           
            onPress={(e)=> handleReviewsCreation(e)}
            
            >
                <Image
                source={require('../assets/send.png')}
                style={{
                    width:width*0.05,
                    height:height*0.02
                }}
                />
            </TouchableOpacity>
              </View>
</View>
      
   <NavigationBar/>
    </View>
    </KeyboardAwareScrollView>
  )
}

export default PharProf

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    // flex:1,
    alignItems:'center',
    justifyContent:'center',
    gap:9
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
  secondOrdersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingLeft:7,
    paddingRight:7
  },
  button: {
    backgroundColor: '#ddf0ee',
    borderRadius: 20,
    paddingVertical: 3.5,
    paddingHorizontal: 13,  
  },
  buttonText: {
    color: '#2d958c',
    fontSize: 15,
  },
  ordersText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  
});