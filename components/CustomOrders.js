import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";

const CustomOrders = ({ navigation }) => {
  const [name, setName] = useState("");
  const [orderPlacedDate, setOrderPlacedDate] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [designImage, setDesignImage] = useState("");

  const customOrderData = {
    name: name,
    orderPlacedDate: orderPlacedDate,
    category: category,
    area: area,
    price: price,
    designImage: designImage,
  };
  const [customOrders, setCustomOrders] = useState([
    {
      id: 1,
      customerName: "John Doe",
      orderPlacedDate: "july 6,2023",
      category: "Shirt",
      area: "Tariq road",
      priceOffered: "50",
      designImage: require("../Images/mobile.jpg"),
    },
    {
      id: 2,
      customerName: "John Doe",
      orderPlacedDate: "may 23,2023",
      category: "Shirt",
      area: "Tariq road",
      priceOffered: "1000",
      designImage: require("../Images/mobile.jpg"),
    },
    {
      id: 3,
      customerName: "John Doe",
      orderPlacedDate: "2023-08-25",
      category: "Shirt",
      area: "Tariq road",
      priceOffered: "2000",
      designImage: require("../Images/mobile.jpg"),
    },
    {
      id: 4,
      customerName: "John Doe",
      orderPlacedDate: "2023-08-25",
      category: "Shirt",
      area: "Tariq road",
      priceOffered: "5900",
      designImage: require("../Images/mobile.jpg"),
    },
    {
      id: 5,
      customerName: "John Doe",
      orderPlacedDate: "2023-08-25",
      category: "Shirt",
      area: "Tariq road",
      priceOffered: "2350",
      designImage: require("../Images/mobile.jpg"),
    },
    {
      id: 6,
      customerName: "John Doe",
      orderPlacedDate: "2023-08-25",
      category: "Shirt",
      area: "Tariq road",
      priceOffered: "550",
      designImage: require("../Images/mobile.jpg"),
    },
    {
      id: 7,
      customerName: "John Doe",
      orderPlacedDate: "2023-08-25",
      category: "Shirt",
      area: "Tariq road",
      priceOffered: "5550",
      designImage: require("../Images/mobile.jpg"),
    },

    // Add more dummy orders
  ]);
  const renderOrderItem = ({ item }) => (
    <View style={styles.orderContainer}>
      <View style={styles.orderItem}>
        <Image
          source={item.designImage} // Replace with: source={require(item.designImage)}
          style={styles.thumbnailImage}
        />
        <View style={styles.orderDetails}>
          <Text style={styles.customerName}>{item.customerName}</Text>
          <Text style={styles.orderPlacedDate}>{item.orderPlacedDate}</Text>
          <Text style={styles.TxtStyle}>{item.category}</Text>
          <Text style={styles.TxtStyle}>{item.area}</Text>
          <Text style={styles.TxtStyle}>Rs {item.priceOffered}</Text>
        </View>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() =>
            // navigation.navigate("ViewCustomOrder", { orderId: item.id })
            navigation.navigate("ViewCustomOrder", {
              data: item,
            })
          }
        >
          <Text style={styles.viewButtonText}>View Order</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.space}></View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={customOrders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
  orderContainer: {
    marginBottom: 10,
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 14,
  },
  thumbnailImage: {
    width: 80,
    height: 60,
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
    marginRight: 10,
  },
  viewButton: {
    backgroundColor: "#16a085",
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  viewButtonText: {
    color: "#fff",
  },
  space: {
    height: 5,
  },
  customerName: {
    fontWeight: "bold",
    marginVertical: 2,
  },
  orderPlacedDate: {
    color: "gray",
    marginTop: 2,
    marginBottom: 2,
  },
  TxtStyle: {
    fontSize: 14,
    marginBottom: 2,
  },
};

export default CustomOrders;
