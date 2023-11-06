// AllMedicines.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NavigationBar from "../components/NavigationBar";
import { useNavigation } from "@react-navigation/native";
import MedicineCard from "../components/MedicineCard";
import lense from "../assets/lense.png";

const AllMedicines = () => {
  const navigation = useNavigation();

  const medicines = [
    {
      name: "Doliprane 1000",
      image:
        "https://www.med.tn/image-medicament-9816dd007411506ab2ce1249e99d2c8c.jpg",
      price: 10,
      contraindications: [
        "Allergie au paracétamol",
        "Insuffisance hépatique",
        "Grossesse",
        "Allaitement",
      ],
    },
    {
      name: "Gripex",
      image:
        "https://galpharma.tn/wp-content/uploads/2019/09/Gripex-Adulte-12.jpg",
      price: 10,
      contraindications: [
        "Allergie au paracétamol",
        "Insuffisance hépatique",
        "Grossesse",
        "Allaitement",
      ],
    },
    {
      name: "Analgin 500mg",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/1/BN/EZ/DT/95289/analgin.jpg",
      price: 10,
      contraindications: [
        "Allergie au paracétamol",
        "Insuffisance hépatique",
        "Grossesse",
        "Allaitement",
      ],
    },
    {
      name: "Efferalgan 500mg",
      image:
        "https://www.famacie.com/web/image/product.template/985/image_1024?unique=561b0e2",
      price: 10,
      contraindications: [
        "Allergie au paracétamol",
        "Insuffisance hépatique",
        "Grossesse",
        "Allaitement",
      ],
    },
    {
      name: "Aspirine 500mg",
      image:
        "https://cdn1.apopixx.de/500/web_schraeg_png/10203626.png?ver=1649058520",
      price: 10,
      contraindications: [
        "Allergie au paracétamol",
        "Insuffisance hépatique",
        "Grossesse",
        "Allaitement",
      ],
    },
    // Add more medicines here...
  ];

  const [search, setSearch] = useState("");
  const [filteredMedicines, setFilteredMedicines] = useState([]);

  useEffect(() => {
    setFilteredMedicines(
      medicines.filter((medicine) =>
        medicine.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.medicinesText}>Medicines</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Icon name="bell-o" size={25} color="grey" style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="cart-outline"
                size={25}
                color="grey"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Image source={lense} style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
      </View>
      <ScrollView style={styles.container}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {filteredMedicines.map((medicine, index) => (
            <TouchableOpacity
              activeOpacity={1}
              key={index}
              onPress={() =>
                navigation.navigate("MedicineDetails", { medicine })
              }
            >
              <MedicineCard medicine={medicine} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 40 }} />
      </ScrollView>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  medicinesText: {
    fontWeight: "bold",
    fontSize: 35,
    marginLeft: 20,
  },
  icons: {
    flexDirection: "row",
  },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 7,
    marginRight: 10,
    backgroundColor: "#E8E8E8",
    borderColor: "#D3D3D3",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    borderRadius: 20,
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  searchBar: {
    flex: 1,
    padding: 10,
  },
});

export default AllMedicines;
