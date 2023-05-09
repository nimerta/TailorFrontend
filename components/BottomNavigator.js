import React from "react";

//import HomeScreen from "./HomeScreen";
import AddDesignScreen from "./AddDesignScreen";
import SettingScreen from "./SettingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeatherIcon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
//import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { View } from "react-native";
// BottomNavigator.js
const HomeScreen = React.lazy(() => import("./HomeScreen"));

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ navigation, route }) => {
  var routeData = route.params;
  console.log(" route data: ", routeData._id);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#BCEBD7",
        tabBarInactiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#16a085",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: "#16a085",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconComponent;
          let iconStyle = {};

          if (route.name === "Home") {
            (iconName = "home"),
              (iconComponent = (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              ));
          } else if (route.name === "AddDesign") {
            (iconName = "camera-plus-outline"),
              (iconComponent = (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              ));
          } else if (route.name === "Settings") {
            iconName = "settings-outline";
            iconComponent = (
              <Ionicons name={iconName} size={size} color={color} />
            );
          }

          if (focused) {
            iconStyle = {};
          }
          return (
            <View
            // style={{
            //   borderRadius: 50,
            //   width: 60,
            //   height: 35,
            //   backgroundColor: focused
            //     ? "rgba(255, 0, 0, 0.2)"
            //     : "transparent",
            //   alignItems: "center",
            //   marginTop: 8,
            // }}
            >
              {iconComponent}
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AddDesign"
        component={AddDesignScreen}
        options={{ headerShown: false }}
        listeners={{
          tabPress: () => {
            console.log("kfdsjhgdhjffdghdgj");
            navigation.navigate("AddDesign", routeData._id);
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigator;
