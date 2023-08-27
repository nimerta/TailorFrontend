import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const SummaryScreen = ({ navigation }) => {
  const [order, setOrder] = useState({
    orderId: "12345",
    customerName: "John Doe",
    address: "123 Main St",
    phoneNo: "555-1234",
    orderItems: [
      { id: 1, title: "Maxi Dress", price: 99.99 },
      { id: 2, title: "Blouse", price: 49.99 },
    ],
    date: "July 6, 2023",
    paymentMethod: "Credit Card",
  });

  // Create state variables for attributes used in the order summary
  const [customerName, setCustomerName] = useState(order.customerName);
  const [address, setAddress] = useState(order.address);
  const [phoneNo, setPhoneNo] = useState(order.phoneNo);
  const [orderItems, setOrderItems] = useState(order.orderItems);
  const [title, setTitle] = useState(order.date);
  const [price, setPrice] = useState(order.date);
  const [date, setDate] = useState(order.date);
  const [paymentMethod, setPaymentMethod] = useState(order.paymentMethod);

  const handleUpdateStatus = () => {
    navigation.navigate("OrderStatusScreen");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.orderContainer}>
        <Text style={styles.title}>Order Summary</Text>

        {/* Customer Details */}
        <View style={styles.customerContainer}>
          <Text>Customer Name: {customerName}</Text>
          <Text>Address: {address}</Text>
          <Text>Phone No: {phoneNo}</Text>
        </View>

        {/* Order Items */}
        <View style={styles.orderItemsContainer}>
          <Text>Order Items:</Text>
          {orderItems.map((item) => (
            <View key={item.id} style={styles.orderItemContainer}>
              {/* ... (item image) */}
              <Image
                source={require("../Images/mobile.jpg")}
                style={styles.itemImage}
              />
              <View style={styles.itemDetailsContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>Rs {item.price.toFixed(2)}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text>Date: {date}</Text>
        <Text>Payment Method: {paymentMethod}</Text>

        {/* ... (total price) */}

        <TouchableOpacity
          style={styles.updateStatusButton}
          onPress={handleUpdateStatus}
        >
          <Text style={styles.updateStatusButtonText}>Update Status</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  orderContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  customerContainer: {
    marginBottom: 10,
  },
  orderItemsContainer: {
    marginBottom: 10,
  },
  orderItemContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetailsContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#16a085",
  },
  updateStatusButton: {
    backgroundColor: "#16a085",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  updateStatusButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default SummaryScreen;
