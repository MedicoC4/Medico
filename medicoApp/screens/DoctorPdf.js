import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, Image, FlatList, TouchableOpacity, Alert } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import COLORS from "../constants/colors";
import * as DocumentPicker from "expo-document-picker";
import { updateRecords } from "../redux/doctorSlicer"; 
import { auth } from "../firebase-config";

const { width, height } = Dimensions.get("window");

const DoctorPdf = () => {
  const dispatch = useDispatch();
  const [documents, setDocuments] = useState({ assets: [] });
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      multiple: true,
    });

    const totalSelectedDocuments = result.assets.length + documents.assets.length;

    if (totalSelectedDocuments > 6) {
      Alert.alert(
        "Limit Exceeded",
        "You can only select up to 6 documents.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } else {
      setDocuments((prevDocuments) => ({
        assets: [...prevDocuments.assets, ...result.assets],
      }));
    }
  };

  const sendDocuments = async () => {
    try {
      const uploadPromises = documents.assets.map(async (document) => {
        const formData = new FormData();
        formData.append('file', { uri: document.uri, name: document.name, type: document.type });

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dp42uyqn5/upload`, 
          {
            method: 'POST',
            body: formData,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        const responseData = await response.json();

        return {
          type: responseData.format,
          file: responseData.secure_url,
          name: document.name,
        };
      });

      const uploadedDocuments = await Promise.all(uploadPromises);

      const obj = {
        email: auth.currentUser.email,
        Record: uploadedDocuments,
      };

      dispatch(updateRecords(obj));
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      // Handle error
    }
  };

  useEffect(() => {
    setIsButtonVisible(documents.assets.length > 0);
  }, [documents.assets]);

  useEffect(() => {
    if (documents.assets.length > 0) {
      documents.assets.forEach((asset) => {
        console.log("Selected File:", asset.name);
      });
    }
  }, [documents.assets]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "800", textAlign: "center" }}>
        Insert Your document(s) please!
      </Text>
      <Image
        source={require("../assets/step3.png")}
        style={{ height: height * 0.3, width: width * 0.9 }}
      />

      <View style={{ gap: 20 }}>
        <Button
          title="Select Document(s)"
          onPress={pickDocument}
          filled
          style={{ width: width * 0.95 }}
        />
        <Button
          title="Send Document(s)"
          style={{ width: width * 0.95 }}
          onPress={sendDocuments}
        />
        {documents && documents.assets && documents.assets.length > 0 && (
          <FlatList
            data={documents.assets}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => console.log(item.uri)}>
                <View
                  style={{
                    padding: 10,
                    backgroundColor: COLORS.grey,
                    borderRadius: 10,
                    marginVertical: 5,
                    alignItems: "center",
                  }}
                >
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default DoctorPdf;
