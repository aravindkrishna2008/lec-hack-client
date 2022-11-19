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
      <Image
        style={styles.img}
        source={require("../../assets/imgs/bob.jpg")}
      />
    </View>
  );
}
