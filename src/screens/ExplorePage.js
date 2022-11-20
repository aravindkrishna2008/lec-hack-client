import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import axios from "axios";

const config = {
  headers: {
    accept: "application/json",
  },
};

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ApiPage = () => {
  const [data, setData] = useState([]);
  const renderItem = ({ item }) => <Item title={item.fullName} />;
  useEffect(() => {
    const getData = async () => {
      const data = await axios
        .get(
          "https://developer.nps.gov/api/v1/activities/parks?id=&q=hiking&limit=10&api_key=7o6gVoqugCb39jY9QMHXMR50TLvue5GAjwC6tb1L",
          config
        )
        .then((res) => {
          setData(res.data.data[0].parks);
        });
    };
    getData();
  }, []);

  console.log(data);

  return (
    <View>
      <Text>ApiPage</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ApiPage;
