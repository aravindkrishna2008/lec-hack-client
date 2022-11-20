import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import axios from "axios";

const config = {
  headers: {
    accept: "application/json",
  }
}

const DetailsPage = ({ route, navigation }) => {
  const { item } = route.params;
  const [datas, setData] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await axios
        .get(
          `https://developer.nps.gov/api/v1/parks?parkCode=${item}&api_key=7UnipARVuUlgr4oLxDn5VNvK01AX9CzbfxCcquiy`,
          config
        )
        .then((res) => {
          setData(res.data.data[0].images[0].url);
          setInfo(res.data.data[0]);
        });
    };
    getData();
  }, []);

  console.log(datas);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: datas,
        }}
        width={"100%"}
        height={"100%"}
      />

      <View
        style={{
          zIndex: 99,
          position: "absolute",
        }}
      >
        <View style={styles.stuff}>
          <Text style={styles.text}>{info.fullName}</Text>
          <Text style={styles.descriptiosn}>{info.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "black",
    marginTop: 100,
    fontSize: 36,
    fontWeight: "bold",
  },
  descriptiosn: {
    color: "black",
    marginTop: 100,
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#05143f",
    alignContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  inputContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: "72%",
    backgroundColor: "#05143f",
    width: "100%",
    borderRadius: 20,
    height: "100%",
  },
  img: {
    width: "100%",
    maxHeight: "100%",
  },
  input: {
    marginTop: 30,
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
    borderRadius: 20,
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
    borderRadius: 20,
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
  backButton: {
    position: "absolute",
    zIndex: 99,
    left: 0,
    top: 10,
    padding: 25,
  },
});

export default DetailsPage;
