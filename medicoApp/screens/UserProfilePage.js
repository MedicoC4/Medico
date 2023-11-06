import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const UserProfilePage = () => {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 22,
        // backgroundColor: "white",
        paddingTop: 55,
        paddingBottom: 40,
        flexDirection: "column",
        gap: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          //   backgroundColor: "green",
          height: 100,
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Profile</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor: "blue",
            width: "40%",
            height: "100%",
            padding: 0,
          }}
        >
          <TouchableOpacity>
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
                backgroundColor: "#EAEAEA",
              }}
            >
              <Image
                source={require("../assets/bell.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100,
              shadowColor: "rgba(3, 3, 3, 0.1)",
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              backgroundColor: "#EAEAEA",
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
                backgroundColor: "#EAEAEA",
              }}
            >
              <Image
                source={require("../assets/basket.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          margin: 3,
          gap: 8,
          //   backgroundColor: "yellow",
        }}
      >
        <View
          style={{
            width: 150,
            height: 150,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            shadowColor: "rgba(3, 3, 3, 0.1)",
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            backgroundColor: "#EAEAEA",
            position: "relative",
          }}
        >
          <Image
            style={{
              width: 150,
              height: 150,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100,
              shadowColor: "rgba(3, 3, 3, 0.1)",
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              backgroundColor: "#EAEAEA",
            }}
            source={require("../assets/hero3.jpg")}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              width: 150,
              top: 15,
              left: 110,
              width: 35,
              height: 35,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100,
              shadowColor: "rgba(3, 3, 3, 0.1)",
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              backgroundColor: "#1a998e",
              borderWidth: 3.5,
              borderColor: "white",
              borderStyle: "solid",
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assets/editPen.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Sanni Muiz</Text>
        <View
          style={{
            width: "55%",
            height: 24,
            borderRadius: 24,
            shadowColor: "rgba(3, 3, 3, 0.1)",
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            backgroundColor: "#EAEAEA",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>muizzsani99@gmail.com</Text>
        </View>
      </View>
      <View style={{ height: "46%" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            height: "25%",
            // backgroundColor: "grey",
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
                  source={require("../assets/personalDetails.png")}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
            </View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Personal Details
            </Text>
          </View>
          <View
            style={
              {
                // width: 60,
                // height: 60,
                // justifyContent: "center",
                // alignItems: "center",
                // borderRadius: 100,
                // shadowColor: "rgba(3, 3, 3, 0.1)",
                // shadowOffset: { width: 0, height: 2 },
                // shadowRadius: 4,
              }
            }
          >
            {/* <Image source={require("../assets/flesh_right.png")}
            style={{
                width: 35,
                height: 35,
              }}
            /> */}
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
            width: "100%",
            justifyContent: "space-between",
            height: "25%",
            // backgroundColor: "grey",
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
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Payments</Text>
          </View>
          <View>
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
            width: "100%",
            justifyContent: "space-between",
            height: "25%",
            // backgroundColor: "grey",
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
                  source={require("../assets/settings.png")}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
            </View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Settings</Text>
          </View>
          <View>
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
            width: "100%",
            justifyContent: "space-between",
            height: "25%",
            // backgroundColor: "grey",
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
                  source={require("../assets/support.png")}
                  style={{
                    width: 27,
                    height: 27,
                  }}
                />
              </View>
            </View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Support</Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="#1a998e" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfilePage;
