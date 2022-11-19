import React from "react";
import { Text, View, StyleSheet, useEffect, useState } from "react-native";
import axios from "axios";

const config = {
  headers: {
    accept: "application/json",
  },
};

const ApiPage = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await axios
        .get(
          "https://developer.nps.gov/api/v1/activities/parks?id=&q=hiking&api_key=7o6gVoqugCb39jY9QMHXMR50TLvue5GAjwC6tb1L",
          config
        )
        .then((res) => {
          console.log(res);
        });
    };
    getData();
  }, []);

  return (
    <View>
      <Text>ApiPage</Text>
    </View>
  );
};

export default ApiPage;
