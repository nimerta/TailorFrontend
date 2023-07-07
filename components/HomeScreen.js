import React from "react";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Loading from "./Loaders/Loading.js";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import BottomNavigator from "./BottomNavigator.js";
import Octicons from "react-native-vector-icons/Octicons";

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ordersQuantity, setOrdersQuantity] = useState("20");
  const [fullName, setFullname] = useState("Mehak jagwani");
  const [ordersTitle, setOrdersTitle] = useState("Standard orders");
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const OnStandardOrders = () => {
    navigation.navigate("StandardOrder");
  };
  return (
    <View style={styles.Container}>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.HeaderStyle}>
            <View style={styles.ProfileBox}>
              <Image
                style={styles.ProfileStyle}
                source={require("../Images/mobile.jpg")}
              ></Image>
            </View>
            <View style={styles.TxtContainer}>
              <Text style={styles.Txt1Style}>{fullName}</Text>
              <Text style={styles.Txt2Style}>Good Morning!</Text>
            </View>
            <TouchableOpacity style={styles.notifcationStyle}>
              <MaterialIcons
                name="notifications-none"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.OrdersMainBox}>
            <TouchableOpacity style={styles.OrderContainer}>
              <View style={styles.IconStyle}>
                <MaterialIcons name="shopping-cart" size={40} color="white" />
              </View>
              <View style={styles.OrderTextBox}>
                <Text style={styles.TotalOrders}>{ordersQuantity}</Text>
                <Text style={styles.OrdersHeading}>{ordersTitle}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OrderContainer}>
              <View style={styles.IconStyle}>
                <MaterialIcons name="pending-actions" size={40} color="white" />
              </View>
              <View style={styles.OrderTextBox}>
                <Text style={styles.TotalOrders}>{ordersQuantity}</Text>
                <Text style={styles.OrdersHeading}>{ordersTitle}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.OrdersMainBox}>
            <TouchableOpacity style={styles.OrderContainer}>
              <View style={styles.IconStyle}>
                <Octicons name="checklist" size={40} color="white" />
              </View>
              <View style={styles.OrderTextBox}>
                <Text style={styles.TotalOrders}>{ordersQuantity}</Text>
                <Text style={styles.OrdersHeading}>{ordersTitle}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.OrderContainer}
              onPress={OnStandardOrders}
            >
              <View style={styles.IconStyle}>
                <Octicons name="list-ordered" size={40} color="white" />
              </View>
              <View style={styles.OrderTextBox}>
                <Text style={styles.TotalOrders}>{ordersQuantity}</Text>
                <Text style={styles.OrdersHeading}>{ordersTitle}</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.bottomNavigatorContainer}>
            <BottomNavigator />
          </View> */}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,

    backgroundColor: "#F7F7F7",
  },
  bottomNavigatorContainer: {
    // position: "absolute",
    // bottom: -425,
    // left: 0,
    // right: 0,
    marginTop: 350,
  },
  mainContainer: {
    height: "100%",
    width: "100%",
    marginTop: 60,
    // backgroundColor: "white",
  },
  HeaderStyle: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    backgroundColor: "transparent",
    //marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  ProfileBox: {
    width: "14%",
    height: "100%",
    marginTop: 11,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  ProfileStyle: {
    width: "100%",
    height: "75%",
    resizeMode: "cover",
    borderRadius: 50,
  },
  TxtContainer: {
    flexDirection: "column",

    justifyContent: "space-between",
    flex: 1,
    width: "auto",
    maxWidth: "60%",
    padding: 12,
    // marginVertical: 10,
    // marginHorizontal: 10,
    // marginVertical: 10,
  },
  Txt1Style: {
    fontSize: 20,
    fontWeight: "900",
    //fontFamily: "Arial",
    fontStyle: "normal",
    color: "#16a085",
    // backgroundColor: "blue",
  },
  Txt2Style: {
    fontSize: 13,
    fontWeight: "500",
    //fontFamily: "Arial",
    fontStyle: "normal",
    color: "black",
    marginTop: 6,
    // backgroundColor: "green",
  },
  notifcationStyle: {
    backgroundColor: "white",
    height: "75%",
    width: "13%",
    marginLeft: "5%",
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  OrdersMainBox: {
    width: "100%",
    height: 250,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
    alignItems: "center",
    // MarginTop: 10,
  },
  OrderContainer: {
    width: "45%",
    height: 200,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
  },
  IconStyle: {
    height: 70,
    width: 70,
    backgroundColor: "#16a085",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
  },
  OrderTextBox: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: 80,
    width: 180,
    //backgroundColor: "yellow",
  },
  TotalOrders: {
    fontSize: 30,
    alignSelf: "center",
    width: "auto",
    maxWidth: "100%",
    color: "#16a085",
  },
  OrdersHeading: {
    fontSize: 20,
    textAlign: "center",
    //fontFamily: "Arial",
    fontWeight: "bold",
    color: "#16a085",
  },
});
export default HomeScreen;
