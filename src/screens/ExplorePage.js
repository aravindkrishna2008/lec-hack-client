import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const config = {
  headers: {
    accept: "application/json",
  },
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const ApiPage = ({ navigation: { navigate } }) => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);

  const Item = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigate("Details", {
            item: item.parkCode,
          })
        }
      >
        <View style={styles.item}>
          {/* <Image source={{ uri: image }} /> */}
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem = ({ item }) => <Item item={item} />;
  useEffect(() => {
    const getData = async () => {
      const data = await axios
        .get(
          "https://developer.nps.gov/api/v1/activities/parks?id=&q=hiking&limit=10&api_key=7UnipARVuUlgr4oLxDn5VNvK01AX9CzbfxCcquiy",
          config
        )
        .then((res) => {
          setData(res.data.data[0].parks).slice(0, 30);
        });
    };
    getData();
  }, []);

  return (
    <View style={{ backgroundColor: "#05143f", height: "100%" }}>
      <Text>ApiPage</Text>
      <FlatList
        // numColumns={2}
        data={shuffle(data)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#112a72",
    marginHorizontal: "10%",
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    width: "80%",
  },
  title: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ApiPage;
