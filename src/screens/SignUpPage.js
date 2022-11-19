import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { auth } from "../../firebase_init";
import { db } from "../../firebase_init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import urid from "urid";

const SignUpScreen = ({ navigation: { navigate } }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // <-- add this line

  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials.user;
      }
    );
    navigate("HomePage");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/imgs/IMG2.jpg")}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Sign up for Camplance</Text>
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
          onPress={() => {
            handleSignUp();
          }}
        >
          <Text style={styles.text1}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
});

export default SignUpScreen;
