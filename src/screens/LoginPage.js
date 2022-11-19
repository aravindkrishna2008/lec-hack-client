import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";

import { auth } from "../../firebase_init";

export default function LoginPage({ navigation: { navigate } }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then(
      async (userCredentials) => {
        navigate("HomePage");
      }
    );
  };

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <AntDesign
            name="back"
            size={24}
            color="white"
            style={styles.backButton}
          />
          <Image
            style={styles.img}
            source={require("../../assets/imgs/IMG2.jpg")}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Login to Camplance</Text>
            <View style={styles.input}>
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.insideInput}
                placeholder="Email"
                placeholderTextColor={"#fff"}
                autoCapitalize={false}
                autoComplete={false}
                autoCorrect={false}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.insideInput}
                placeholder="Password"
                placeholderTextColor={"#fff"}
                secureTextEntry
                autoCapitalize={false}
                autoComplete={false}
                autoCorrect={false}
              />
            </View>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => handleLogin()}
            >
              <Text style={styles.text1}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

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
    borderRadius: "20%",
    marginLeft: "1%",
  },
  img: {
    width: "100%",
    maxHeight: "50%",
  },
  input: {
    marginTop: 30,
    borderWidth: 2,
    borderColor: "#fff",
    padding: 16,
    borderRadius: "20%",
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
    fontSize: 32,
    fontWeight: "bold",
  },
  button1: {
    width: "72%",
    height: 50,
    backgroundColor: "#fff",
    marginTop: 50,
    borderRadius: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#05143f",
    fontWeight: "bold",
    fontSize: 18,
  },
  backButton: {
    zIndex: 99,
  },
});
