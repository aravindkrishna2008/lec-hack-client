import React from "react";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAuth } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign } from "@expo/vector-icons";

const TripsPage = () => {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [route, setRoute] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [cover, setCover] = React.useState();

  async function submit() {
    const auth = getAuth();
    const uid = auth.currentUser.uid;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("route", route);
    formData.append("desc", desc);
    formData.append("mileage", number);
    formData.append("uid", uid);
    const h = new Headers();
    h.append("Content-Type", "multipart/form-data");
    await fetch("https://LECHacksBackendServer.alphasquad.repl.co/hikes/add", {
      method: "POST",
      body: formData,
      headers: h,
    });
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/imgs/IMG4.jpg")}
      />
      <TextInput placeholder="Title" onChangeText={setTitle} value={title} />
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Create a new Trip</Text>

        <View style={styles.input}>
          <TextInput
            selectionColor={"white"}
            style={styles.insideInput}
            placeholder="Description"
            onChangeText={setDesc}
            value={desc}
            placeholderTextColor={"white"}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            selectionColor={"white"}
            style={styles.insideInput}
            placeholder="Route Link"
            onChangeText={setRoute}
            value={route}
            placeholderTextColor={"white"}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            selectionColor={"white"}
            style={styles.insideInput}
            placeholder="Mileage"
            onChangeText={onChangeNumber}
            value={number}
            keyboardType="numeric"
            placeholderTextColor={"white"}
          />
        </View>
        <TouchableOpacity
          style={styles.button1}
          onPress={async () => await submit()}
        >
          <Text style={styles.text1}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigate("Home")}
        >
          <AntDesign name="back" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05143f",
    alignContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: "96%",
    backgroundColor: "#05143f",
    width: "99%",
    borderRadius: 20,
    marginLeft: "1%",
  },
  img: {
    width: "100%",
    maxHeight: "50%",
  },
  input: {
    marginTop: 25,
    borderWidth: 2,
    borderColor: "#fff",
    padding: 16,
    borderRadius: 20,
    marginBottom: -10,
    width: "72%",
  },
  insideInput: {
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    marginTop: 25,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  button1: {
    width: 300,
    height: 50,
    backgroundColor: "#fff",
    marginTop: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#05143f",
    fontWeight: "bold",
    fontSize: 18,
  },
  backButton: {
    position: "absolute",
    zIndex: 99,
    right: 0,
    bottom: "20%",
    padding: 25,
  },
  error: {
    color: "red",
    position: "absolute",
    bottom: -40,
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default TripsPage;
