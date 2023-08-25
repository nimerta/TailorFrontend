import * as React from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../components/GlobalStyles";

// ... (imports and other code)

const CustomOrderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.orderBox}>
        <Image
          style={styles.profilePic}
          source={require("../Images/mobile.jpg")}
        />
        <Text style={[styles.customerName, styles.amount]}>Imtiaz Ali</Text>
        <Text style={[styles.rsAmount, styles.amount]}>Rs 200</Text>
        <Image
          style={[styles.actionButtonIcon, styles.buttonPosition]}
          source={require("../Images/mobile.jpg")}
        />
        <Text style={[styles.declineText, styles.actionButtonText]}>
          Decline
        </Text>
        <View style={[styles.acceptButton, styles.buttonPosition]} />
        <Text style={[styles.acceptText, styles.actionButtonText]}>Accept</Text>
      </View>
      <View style={styles.customerInfoWrapper}>
        <Text style={[styles.customerInfo, styles.amount]}>
          Customer Name: Nimerta
          {"\n"}Address: Hameeda Heights
          {"\n"}Phone No: 03134455675
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
  orderBox: {
    top: 70,
    left: 8,
    borderRadius: 16,
    backgroundColor: "#ebf0f4",
    width: "94%",
    height: 120,
    position: "absolute",
    overflow: "hidden",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  customerName: {
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: 59,
    top: 16,
  },
  amount: {
    color: Color.black,
    textAlign: "left",
  },
  rsAmount: {
    fontSize: FontSize.size_mini,
    top: 23,
    left: 150,
  },
  profilePic: {
    left: 9,
    width: 40,
    height: 39,
    top: 16,
    position: "absolute",
  },
  actionButtonIcon: {
    left: 15,
    borderRadius: 11,
    width: 74,
    height: 27,
  },
  buttonPosition: {
    top: 66,
    position: "absolute",
  },
  declineText: {
    top: 70,
    left: 26,
  },
  acceptButton: {
    left: 105,
    borderRadius: 9,
    backgroundColor: "#2ac295",
    width: 78,
    height: 26,
  },
  acceptText: {
    top: 69,
    left: 118,
  },
  customerInfoWrapper: {
    top: 200,
    left: 12,
    borderRadius: 12,
    backgroundColor: "#f3eaea",
    width: "94%",
    height: 120,
    position: "absolute",
    overflow: "hidden",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  customerInfo: {
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: "left",
  },
});

export default CustomOrderScreen;
