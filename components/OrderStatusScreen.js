import axios from "axios";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ip from "../IP_Configuration";

const OrderStatusScreen = ({ navigation, route }) => {
  const [selectedOrder, setSelectedOrder] = useState(route.params.data);
  const [selectedStatus, setSelectedStatus] = useState(
    selectedOrder.order_status
  );

  const orderTypes = {
    PLACED: "PLACED",
    PREPARING: "IN-PROCESS",
    CONFIRMED: "CONFIRMED",
    COMPLETED: "COMPLETED",
    DELIVERED: "DELIVERED",
  };

  const updateOrderStatus = async () => {
    const bodyData = {
      updatedStatus: selectedStatus,
    };
    var apiResponse = await axios
      .patch(
        `http://${Ip.mainIp}/api/standard-order/update-standard-order-status/${selectedOrder._id}`,
        bodyData
      )
      .then((onUpdate) => {
        console.log("on update: ", onUpdate.data);
      })
      .catch((onUpdateError) => {
        console.log("on update error: ", onUpdateError);
      });
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleUpdateStatus = () => {
    updateOrderStatus();
    alert("Order status updated successfully");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Status</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedStatus === orderTypes.PLACED && styles.radioButtonSelected,
          ]}
          onPress={() => handleStatusChange(orderTypes.PLACED)}
        >
          <View
            style={[
              styles.radioButtonInner,
              selectedStatus === orderTypes.PLACED &&
                styles.radioButtonInnerSelected,
            ]}
          />
          <Text style={styles.radioText}>Placed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedStatus === orderTypes.PREPARING &&
              styles.radioButtonSelected,
          ]}
          onPress={() => handleStatusChange(orderTypes.PREPARING)}
        >
          <View
            style={[
              styles.radioButtonInner,
              selectedStatus === orderTypes.PREPARING &&
                styles.radioButtonInnerSelected,
            ]}
          />
          <Text style={styles.radioText}>In Process</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedStatus === orderTypes.COMPLETED &&
              styles.radioButtonSelected,
          ]}
          onPress={() => handleStatusChange(orderTypes.COMPLETED)}
        >
          <View
            style={[
              styles.radioButtonInner,
              selectedStatus === orderTypes.COMPLETED &&
                styles.radioButtonInnerSelected,
            ]}
          />
          <Text style={styles.radioText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedStatus === orderTypes.DELIVERED &&
              styles.radioButtonSelected,
          ]}
          onPress={() => handleStatusChange(orderTypes.DELIVERED)}
        >
          <View
            style={[
              styles.radioButtonInner,
              selectedStatus === orderTypes.DELIVERED &&
                styles.radioButtonInnerSelected,
            ]}
          />
          <Text style={styles.radioText}>Delivered</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.selectedStatusText}>
        Selected Status: {selectedStatus}
      </Text>
      <TouchableOpacity
        style={styles.updateButton}
        onPress={handleUpdateStatus}
      >
        <Text style={styles.updateButtonText}>Confirm Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  radioContainer: {
    alignItems: "flex-start",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButtonSelected: {
    //backgroundColor: "#16a085",
  },
  radioButtonInner: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#16a085",
    marginRight: 5,
    backgroundColor: "#fff",
  },
  radioButtonInnerSelected: {
    backgroundColor: "#16a085",
  },
  radioText: {
    marginLeft: 5,
    fontSize: 16,
  },
  selectedStatusText: {
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: "#16a085",
    height: 50,
    width: "95%",
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  updateButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default OrderStatusScreen;
