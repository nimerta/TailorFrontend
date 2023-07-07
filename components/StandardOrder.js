import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const StandardOrder = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Maxi Dress",
      price: 99.99,
      customerName: "Nimerta",
      date: "july 6,2023",
      image: require("../Images/mobile.jpg"),
    },
    {
      id: 2,
      name: "Blouse",
      price: 49.99,
      customerName: "Nimerta",
      date: "july 6,2023",
      image: require("../Images/mobile.jpg"),
    },
    {
      id: 3,
      name: "Maxi Dress",
      price: 99.99,
      customerName: "Nimerta",
      date: "july 6,2023",
      image: require("../Images/mobile.jpg"),
    },
    {
      id: 4,
      name: "Blouse",
      price: 49.99,
      customerName: "Nimerta",
      date: "july 6,2023",
      image: require("../Images/mobile.jpg"),
    },
    {
      id: 5,
      name: "Maxi Dress",
      price: 99.99,
      customerName: "Nimerta",
      date: "july 6,2023",
      image: require("../Images/mobile.jpg"),
    },
    {
      id: 6,
      name: "Blouse",
      price: 49.99,
      customerName: "Nimerta",
      date: "july 6,2023",
      image: require("../Images/mobile.jpg"),
    },
    {
      id: 7,
      name: "Maxi Dress",
      price: 99.99,
      customerName: "Nimerta",
      date: "july 6,2023",
      image: require("../Images/mobile.jpg"),
    },
    {
      id: 8,
      name: "Blouse",
      price: 49.99,
      customerName: "Nimerta",
      date: "july 6,2023",
      image: require("../Images/mobile.jpg"),
    },
  ]);
  //   const renderCartItem = (item) => {
  //     return (
  //       <View key={item.id} style={styles.cartItemContainer}>
  //         <Image source={item.image} style={styles.cartItemImage} />
  //         <View style={styles.cartItemDetails}>
  //           <Text style={styles.cartItemTitle}>{item.name}</Text>
  //           <Text style={styles.cartItemPrice}>$ {item.price.toFixed(2)}</Text>
  //         </View>
  //       </View>
  //     );
  //   };
  const handleOrders = () => {
    navigation.navigate("SummaryScreen");
  };
  const renderCartItem = (item) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.cartItemContainer}
        onPress={handleOrders}
      >
        <Image source={item.image} style={styles.cartItemImage} />
        <View style={styles.cartItemDetails}>
          <View style={styles.headingContainer}>
            <Text style={styles.customerName}>{item.customerName}</Text>
            <Text style={styles.cartItemPrice}>$ {item.price.toFixed(2)}</Text>
          </View>

          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.cartItemTitle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Orders</Text>
      <View style={styles.cartItemsContainer}>
        {cartItems.map(renderCartItem)}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    //marginTop: -30,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },

  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 16,
    //marginTop: 5,
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    //marginTop: 5,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#16a085",
  },

  refreshButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  customerName: {
    fontSize: 16,
    fontWeight: "bold",
    //marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: "#888888",
    marginTop: 10,
    marginBottom: 10,
  },
});
export default StandardOrder;
