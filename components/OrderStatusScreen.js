import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const OrderStatusScreen = ({ navigation }) => {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleUpdateStatus = () => {
    alert("Order status updated successfully");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Status</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedStatus === "Placed" && styles.radioButtonSelected,
          ]}
          onPress={() => handleStatusChange("Placed")}
        >
          <View
            style={[
              styles.radioButtonInner,
              selectedStatus === "Placed" && styles.radioButtonInnerSelected,
            ]}
          />
          <Text style={styles.radioText}>Placed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedStatus === "In Process" && styles.radioButtonSelected,
          ]}
          onPress={() => handleStatusChange("In Process")}
        >
          <View
            style={[
              styles.radioButtonInner,
              selectedStatus === "In Process" &&
                styles.radioButtonInnerSelected,
            ]}
          />
          <Text style={styles.radioText}>In Process</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedStatus === "Completed" && styles.radioButtonSelected,
          ]}
          onPress={() => handleStatusChange("Completed")}
        >
          <View
            style={[
              styles.radioButtonInner,
              selectedStatus === "Completed" && styles.radioButtonInnerSelected,
            ]}
          />
          <Text style={styles.radioText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            selectedStatus === "Delivered" && styles.radioButtonSelected,
          ]}
          onPress={() => handleStatusChange("Delivered")}
        >
          <View
            style={[
              styles.radioButtonInner,
              selectedStatus === "Delivered" && styles.radioButtonInnerSelected,
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
