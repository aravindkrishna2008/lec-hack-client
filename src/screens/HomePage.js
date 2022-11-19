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
import { FontAwesome5 } from "@expo/vector-icons";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../assets/imgs/bob.jpg")} />
      <View style={styles.inputContainer}>
        <View style={styles.containerOutside}>
          <View>
            <Text style={styles.title}>Create New Plan</Text>
            <Text style={styles.description}>
              Create a new plan for your next camping trip!
            </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <FontAwesome5 name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    marginTop: "72%",
    backgroundColor: "#05143f",
    width: "100%",
    borderRadius: "20%",
    height: "100%",
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
    marginTop: 6,
    color: "#fff",
    fontSize: 24,
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
  containerOutside: {
    backgroundColor: "#112a72",
    width: "88%",
    marginTop: "6%",
    padding: 16,
    borderRadius: "20%",
    flexDirection: "row",
  },
  description: {
    color: "#fff",
    fontSize: 16,
    marginTop: 8,
    width: 280,
  },
  button: {
    height: 72,
    width: 72,
    backgroundColor: "white",
    marginLeft: -30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
