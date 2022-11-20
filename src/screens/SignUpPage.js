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
import { auth, db } from "../../firebase_init";
import { AntDesign } from "@expo/vector-icons";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
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
import { Header } from "@react-navigation/stack";

const SignUpScreen = ({ navigation: { navigate } }) => {
  const [password, setPassword] = useState("");
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState(""); // <-- add this line
  const [msg, setMsg] = useState(<Text></Text>);

  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        updateProfile(user, {
          displayName: fullName,
        });
        const header = new Headers();
        header.append("Content-Type", "multipart/form-data");
        const formData = new FormData();
        formData.append("display", fullName);
        formData.append("address", user.email);
        formData.append("uid", user.uid);
        fetch("https://LECHacksBackendServer.alphasquad.repl.co/users/add", {
          body: formData,
          headers: header,
          method: "POST",
        });
        navigate("HomePage");
      })
      .catch((err) => {
        setMsg(<Text style={styles.error}>{err.code.split("/")[1]}</Text>);
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigate("Home")}
        >
          <AntDesign name="back" size={32} color="white" />
        </TouchableOpacity>
        <Image
          style={styles.img}
          source={require("../../assets/imgs/IMG2.jpg")}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Sign up for Camplance</Text>
          <View style={styles.input}>
            <TextInput
              value={fullName}
              onChangeText={setFullname}
              style={styles.insideInput}
              placeholder="Full Name"
              placeholderTextColor={"#fff"}
              autoCapitalize={false}
              autoCorrect={false}
              autoComplete={"off"}
            />
          </View>
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
              autoCorrect={false}
              autoComplete={"off"}
            />
          </View>
          {msg}
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              handleSignUp();
            }}
          >
            <Text style={styles.text1}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    width: "72%",
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
    left: 0,
    top: 10,
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

export default SignUpScreen;
