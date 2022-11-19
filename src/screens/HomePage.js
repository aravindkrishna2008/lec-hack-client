import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function HomePage() {
  return (
    <View>
      <Text>Welcome</Text>
      <Image style={styles.img} source={require("../../assets/imgs/bob.jpg")} />
    </View>
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
});
