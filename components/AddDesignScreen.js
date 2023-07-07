import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

import { mainIp } from "../IP_Configuration";

const AddDesignScreen = ({ navigation, route }) => {
  const [image, setImage] = useState("");
  const [apiImage, setApiImage] = useState("");

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [designFor, setDesignFor] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const pickImage = async () => {
    const { status: cameraRollStatus } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    const { status: cameraStatus } =
      await ImagePicker.requestCameraPermissionsAsync();

    if (cameraRollStatus !== "granted" || cameraStatus !== "granted") {
      Alert.alert(
        "Permission required",
        "Please grant camera and photo library permissions to continue."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 7],
      quality: 1,
      base64: true,
    });

    console.log(result.assets[0].base64);

    console.log("route data add design :", route.params);

    setApiImage(result.assets[0].base64);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log("helooooooo");
    }
  };

  const uploadDesign = async () => {
    var bodyData = {
      title: title,
      tailor_id: route.params,
      price: price,
      design_for: designFor,
      description: description,
      imageBase64: apiImage,
    };

    // console.log("body data: ", bodyData);
    var api = await axios
      .post(`http://${mainIp}/api/design/upload-design`, bodyData)
      .then((onUplaod) => {
        console.log("on upload: ", onUplaod.data);
        setTitle("");
        setPrice("");
        setDescription("");
        setDesignFor("");
        setImage("");
        setApiImage("");
      })
      .catch(async (onUplaodError) => {
        console.log("on upload error: ", onUplaodError.response.data);
      });

    console.log("lkhfkj");
  };

  const handleSubmit = () => {
    if (!image || !title || !price || !description || !designFor) {
      Alert.alert("Missing fields", "Please fill in all the fields.");
      return;
    }
    uploadDesign();

    setSubmitted(true);
    //alert("Design uploaded successfully");
    // setTitle("");
    // setPrice("");
    // setDescription("");
    // setDesignFor("");
    // setImage("");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
        {image ? (
          <Image style={styles.image} source={{ uri: image }} />
        ) : (
          <Text style={styles.text}>Choose an image</Text>
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="DesignFor"
        value={designFor}
        onChangeText={(text) => setDesignFor(text)}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline={false}
        textAlignVertical="top"
      />
      {/* {image && title && price && designFor && description && !submitted && (
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      )} */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagePickerButton: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
  },
  text: {
    fontSize: 20,
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 20,
    width: 300,
  },
  submitButton: {
    backgroundColor: "#16a085",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  submittedContainer: {
    marginTop: 20,
  },
  submittedText: {
    fontSize: 20,
    color: "green",
  },
});

export default AddDesignScreen;
