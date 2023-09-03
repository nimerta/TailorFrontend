import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import Loading from "./Loaders/Loading.js";
import axios from "axios";
import Ip from "../IP_Configuration.js";
const ViewCustomOrder = ({ navigation, route }) => {
  //const { width, height } = Dimensions.get("window");
  const { customOrderData } = route.params;
  const [selectedCustomOrder, setSelectedCustomOrder] = useState(
    route.params.data
  );

  const [address, setAddress] = useState(
    selectedCustomOrder.address.formatted_address
  );

  const [phoneNumber, setPhoneNumber] = useState(
    selectedCustomOrder.user.phone_no
  );
  const [name, setName] = useState(selectedCustomOrder.user.full_name);

  const [category, setCategory] = useState(selectedCustomOrder.category);
  const [fabric, setFabric] = useState(selectedCustomOrder.fabric);
  const [price, setPrice] = useState(selectedCustomOrder.total_amount);
  const [instructions, setInstructions] = useState(
    selectedCustomOrder.instructions
  );
  const [orderImages, setOrderImages] = useState(selectedCustomOrder.images);

  const [selectedImage, setSelectedImage] = useState(null);

  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [offerModalVisible, setOfferModalVisible] = useState(false);
  const [images, setImages] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [isSendingOffer, setIsSendingOffer] = useState(false);
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(route.params.loggedInUser);

  const handleImagePress = (image) => {
    setSelectedImage(image.url);
    setImageModalVisible(true);
  };

  const createCustomOrderOffer = async () => {
    const bodyData = {
      amount: offerPrice,
      tailor_id: loggedInUser._id,
      custom_order_id: selectedCustomOrder._id,
    };
    var apiResponse = await axios
      .post(`http://${Ip.mainIp}/api/custom-order/create-order-offer`, bodyData)
      .then((onOfferCreate) => {
        console.log("onOfferCreate: ", onOfferCreate.data);
        setIsLoadingVisible(false); // Stop loading animation
        setOfferModalVisible(false);
        alert(onOfferCreate.data.message);

        navigation.navigate("CustomOrders", {
          loggedInUser: loggedInUser,
        });
      })
      .catch((onOfferCreateError) => {
        console.log("onOfferCreateError: ", onOfferCreateError);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingVisible(false);
    }, 3000);
  }, []);

  const handleSendOffer = () => {
    if (offerPrice === "") {
      alert("Please enter an offer price.");
    } else {
      console.log("offer is send");
      setIsSendingOffer(true); // Start loading animation
<<<<<<< HEAD
      createCustomOrderOffer();

      // setTimeout(() => {
      //   console.log("offer is made");
      //   setIsLoadingVisible(false); // Stop loading animation
      //   setOfferModalVisible(false);
      //   navigation.navigate("CustomOrders", {
      //     loggedInUser: loggedInUser,
      //   }); // Navigate to home screen
      // }, 3000); // Delay in milliseconds, e.g., 3000ms = 3 seconds
=======
      setTimeout(() => {
        console.log("offer is made");
        setIsLoadingVisible(false); // Stop loading animation
        setOfferModalVisible(false);
        navigation.navigate("CustomOrders"); // Navigate to home screen
      }, 2000); // Delay in milliseconds, e.g., 3000ms = 3 seconds
>>>>>>> afc9b6de9e1a1153cfff03199294611a5c147e25
    }
  };

  const imageArray = [
    { key: "1", source: require("../Images/mobile.jpg") },
    { key: "2", source: require("../Images/mobile.jpg") },
    { key: "3", source: require("../Images/mobile.jpg") },
    { key: "4", source: require("../Images/mobile.jpg") },
    { key: "5", source: require("../Images/mobile.jpg") },
    { key: "6", source: require("../Images/mobile.jpg") },
  ];
  const handleMakeOffer = () => {
    setOfferModalVisible(true);
    //setIsLoadingVisible(true);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.shippingAddressContainer}>
          <Text style={styles.sectionHeading}>Shipping Details</Text>
          <Text style={styles.addressValue}>{name}</Text>
          <Text style={styles.addressValue}>{phoneNumber}</Text>
          <Text style={styles.addressValue}>{address}</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.orderSummaryContainer}>
          <Text style={styles.sectionHeading}>Order Summary</Text>
          <View style={styles.imagesContainer}>
            {orderImages.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleImagePress(image)}
              >
                <Image
                  // source={image.source}
                  source={{
                    uri: image.url,
                  }}
                  style={styles.thumbnailImage}
                />
              </TouchableOpacity>
            ))}
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={imageModalVisible}
            onRequestClose={() => setImageModalVisible(false)}
          >
            <View style={styles.modalContainer1}>
              <View style={styles.imageModal}>
                <Image
                  source={{
                    uri: selectedImage,
                  }}
                  style={styles.selectedImage}
                  resizeMode="contain"
                />
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setImageModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={styles.orderSummaryItem}>
            <Text style={styles.orderSummaryValue}>{category}</Text>
          </View>
          <View style={styles.orderSummaryItem}>
            <Text style={styles.orderSummaryValue}>{fabric}</Text>
          </View>
          <View style={styles.orderSummaryItem}>
            <Text style={styles.orderSummaryValue}>Rs{price}</Text>
          </View>
          <View style={styles.orderSummaryItem}>
            <Text style={styles.orderSummaryValue}>{instructions}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.makeOfferButton}
        onPress={handleMakeOffer}
      >
        <Text style={styles.makeOfferButtonText}>Make an offer</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={offerModalVisible || isLoadingVisible}
        onRequestClose={() => {
          setOfferModalVisible(false);
          setIsLoadingVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          {isLoadingVisible ? (
            // <LottieView
            //   source={require("../assets/141023-loader-for-vis.json")}
            //   autoPlay
            //   loop
            // />

            <Loading />
          ) : (
            <View style={styles.whiteContainer}>
              <Text style={styles.modalText}>Add price</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Enter offer price"
                value={offerPrice}
                onChangeText={(text) => setOfferPrice(text)}
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSendOffer}
              >
                <Text style={styles.sendButtonText}>Send offer</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  sectionContainer: {
    marginBottom: 12,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 8,
    color: "#16a085",
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 8,
  },
  thumbnailImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginHorizontal: 8,
    marginBottom: 8,
  },
  shippingAddressContainer: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 10,
  },
  addressValue: {
    fontSize: 16,
    marginBottom: 5,
  },
  orderSummaryContainer: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 10,
  },
  orderSummaryItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  orderSummaryValue: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
  },
  makeOfferButton: {
    backgroundColor: "#16a085",
    height: 40,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },
  makeOfferButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  whiteContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    width: 290,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  inputField: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: "#16a085",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    alignSelf: "flex-end",
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  modalContainer1: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: "90%",
    height: "80%",
  },
  // closeButton: {
  //   position: "absolute",
  //   top: 20,
  //   right: 20,
  //   padding: 10,
  //   borderRadius: 5,
  //   backgroundColor: "#fff",
  // },
  // closeButtonText: {
  //   fontSize: 16,
  //   fontWeight: "bold",
  //   color: "#333",
  // },
  imageModal: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedImage: {
    width: 300,
    height: 300,
  },
  closeButton: {
    backgroundColor: "#16a085",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: "#FFFFFF",
  //   padding: width * 0.04,
  // },
  // sectionContainer: {
  //   marginBottom: height * 0.02,
  // },
  // sectionHeading: {
  //   fontSize: width * 0.055,
  //   fontWeight: "bold",
  //   marginBottom: height * 0.015,
  //   marginTop: height * 0.01,
  //   color: "#16a085",
  // },
  // imagesContainer: {
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   marginVertical: height * 0.015,
  // },
  // thumbnailImage: {
  //   width: width * 0.2,
  //   height: width * 0.2,
  //   borderRadius: width * 0.02,
  //   marginHorizontal: width * 0.03,
  //   marginBottom: height * 0.015,
  // },
  // modalContainer: {
  //   flex: 1,
  //   backgroundColor: "rgba(0, 0, 0, 0.2)",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // closeButton: {
  //   position: "absolute",
  //   top: height * 0.02,
  //   right: width * 0.03,
  //   padding: width * 0.03,
  //   borderRadius: width * 0.02,
  //   backgroundColor: "#fff",
  // },
  // closeButtonText: {
  //   fontSize: width * 0.04,
  //   fontWeight: "bold",
  //   color: "#333",
  // },
  // shippingAddressContainer: {
  //   backgroundColor: "#F0F0F0",
  //   padding: 10,
  //   borderRadius: 10,
  // },
  // addressValue: {
  //   fontSize: 16,
  //   marginBottom: 5,
  // },

  // fullImage: {
  //   width: "90%",
  //   height: "80%",
  // },

  // imageModal: {
  //   backgroundColor: "#FFFFFF",
  //   padding: width * 0.06,
  //   borderRadius: width * 0.05,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // selectedImage: {
  //   width: width * 0.7,
  //   height: width * 0.7,
  // },
  // makeOfferButton: {
  //   backgroundColor: "#16a085",
  //   height: height * 0.08,
  //   borderRadius: width * 0.05,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginVertical: height * 0.03,
  // },
  // makeOfferButtonText: {
  //   fontSize: width * 0.055,
  //   fontWeight: "bold",
  //   color: "#FFFFFF",
  // },

  // whiteContainer: {
  //   backgroundColor: "#FFFFFF",
  //   padding: 20,
  //   borderRadius: 10,
  //   height: 200,
  //   width: 250,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // modalText: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   color: "#000",
  //   marginBottom: 20,
  //   alignSelf: "center",
  // },
  // viewOrderButton: {
  //   backgroundColor: "#16a085",
  //   padding: 10,
  //   borderRadius: 5,
  //   alignSelf: "center",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 50,
  // },
  // viewOrderButtonText: {
  //   fontSize: 16,
  //   fontWeight: "bold",
  //   color: "#fff",
  // },
  // orderSummaryContainer: {
  //   backgroundColor: "#F0F0F0",
  //   padding: 10,
  //   borderRadius: 10,
  // },
  // orderSummaryItem: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginBottom: 10,
  // },
  // orderSummaryLabel: {
  //   fontWeight: "bold",
  //   marginRight: 5,
  // },
  // orderSummaryValue: {
  //   flex: 1,
  //   fontSize: 15,
  //   fontWeight: "500",
  // },
  // selectedPaymentMethodText: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   marginBottom: 15,
  //   color: "#333", // Change color as needed
  // },
});

export default ViewCustomOrder;
