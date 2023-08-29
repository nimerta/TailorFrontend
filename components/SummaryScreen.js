import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Ip from "../IP_Configuration";

const SummaryScreen = ({ navigation, route }) => {
  // const [order, setOrder] = useState({
  //   orderId: "12345",
  //   customerName: route.params.data.user.full_name,
  //   address: "123 Main St",
  //   phoneNo: route.params.data.user.phone_no,
  //   orderItems: [
  //     { id: 1, title: "Maxi Dress", price: 99.99 },
  //     { id: 2, title: "Blouse", price: 49.99 },
  //   ],
  //   date: "July 6, 2023",
  //   paymentMethod: route.params.data.payment_method,
  // });

  const [order, setOrder] = useState(route.params.data);

  const handleUpdateStatus = () => {
    navigation.navigate("OrderStatusScreen", {
      data: order,
    });
  };

  const completedOrder = async () => {
    var apiResponse = await axios
      .patch(
        `http://${Ip.mainIp}/api/standard-order/complete-standard-order/${order._id}`
      )
      .then((onComplete) => {
        console.log("on complete: ", onComplete.data);
        alert(onComplete.data.message);
        navigation.goBack();
      })
      .catch((onCompleteError) => {
        console.log("on complete error: ", onCompleteError);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.orderContainer}>
        <Text style={styles.title}>Order Summary</Text>

        {/* Customer Details */}
        <View style={styles.customerContainer}>
          <Text>Customer Name: {order.user.full_name}</Text>
          {/* <Text>Address: {order.address.formatted_address}</Text> */}
          <Text>Phone No: {order.user.phone_no}</Text>
        </View>

        {/* Order Items */}
        <View style={styles.orderItemsContainer}>
          <Text>Order Items:</Text>
          {order.items.map((item) => (
            <View key={item.id} style={styles.orderItemContainer}>
              <Image
                source={{
                  uri: item?.item?.image?.url,
                }}
                style={styles.itemImage}
              />
              <View style={styles.itemDetailsContainer}>
                <Text style={styles.itemTitle}>{item.item.title}</Text>
                <Text style={styles.itemPrice}>Rs {item.item.price}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text>
          Date:{" "}
          {`${new Date(order.createdAt).getDate()}-${new Date(
            order.createdAt
          ).getMonth()}-${new Date(order.createdAt).getFullYear()}`}
        </Text>
        <Text>Payment Method: {order.payment_method}</Text>
        <Text>Order Status: {order.order_status}</Text>

        {/* Total Price */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Price:</Text>
          <Text style={styles.totalPrice}>Rs {order.total_amount}</Text>
        </View>

        {!order.completed && (
          <TouchableOpacity
            style={styles.updateStatusButton}
            onPress={handleUpdateStatus}
          >
            <Text style={styles.updateStatusButtonText}>Update Status</Text>
          </TouchableOpacity>
        )}

        {/* <TouchableOpacity
          style={styles.updateStatusButton}
          onPress={handleUpdateStatus}
        >
          <Text style={styles.updateStatusButtonText}>Update Status</Text>
        </TouchableOpacity> */}

        {!order.completed && (
          <TouchableOpacity
            style={styles.updateStatusButton}
            onPress={() => {
              completedOrder();
            }}
          >
            <Text style={styles.updateStatusButtonText}>Complete Order</Text>
          </TouchableOpacity>
        )}

        {/* <TouchableOpacity
          style={styles.updateStatusButton}
          onPress={handleUpdateStatus}
        >
          <Text style={styles.updateStatusButtonText}>Complete Order</Text>
        </TouchableOpacity> */}
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
    marginTop: 20,
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
