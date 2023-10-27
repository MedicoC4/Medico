import { View, Text, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'
// import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';
// import LottieView from 'lottie-react-native';
const { width, height } = Dimensions.get("window");


const Welcome = ({ navigation }) => {

    return (
        // <LinearGradient
        //     style={{
        //         flex: 1
        //     }}
        //     colors={[COLORS.secondary, COLORS.primary]}
        // >
            <View style={{ flex: 1 }}> 
                <View>
                    {/* <Image
                        source={require("../assets/hero1.png")}
                        style={{
                            height: 80,
                            width: 80,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    /> */}

                    {/* <Image
                        source={require("../assets/hero3.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: -30,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/hero3.jpg")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -50,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    /> */}

                     <Image
                        source={require("../assets/hero2.png")}
                        style={{
                            height: height*0.25,
                            width: width*0.4,
                            borderRadius: 10,
                            transform: [
                                { translateX: 120 },
                                { translateY: 120 },
                                // { rotate: "12deg" }
                            ]
                        }}
                    /> 
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    // position: "absolute",
                    // top: 400,
                    // width: "100%"
                    transform: [
                      { translateX: -5 },
                      { translateY: 180 },
                      // { rotate: "12deg" }
                  ]
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.black
                    }}>Let's Get</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.primary,
                    }}>Started</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            marginVertical: 4
                        }}>Connect with your pharmacy or doctor</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                        }}>Call, Chat and book your medicines</Text>
                    </View>

                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.primary ,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        // </LinearGradient>
    )
}

export default Welcome