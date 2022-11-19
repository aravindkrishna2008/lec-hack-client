import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native'

export default function StartUpPage ({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/imgs/hi.jpg')} />
      <View styles={styles.buttonContaienr}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigate('Login')}
        >
          <Text style={styles.text1}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigate('SignUp')}
        >
          <Text style={styles.text2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#05143f",
  },
  img: {
    width: "100%",
    maxHeight: "72%",
  },
  buttonContaienr: {
    flex: 1,
    alignItems: "center",
    marginLeft: 50,
  },
  button1: {
    width: "72%",
    height: 50,
    backgroundColor: "#fff",
    marginTop: 50,
    marginLeft: "14%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#05143f",
    fontWeight: "bold",
    fontSize: 18,
  },
  button2: {
    width: "72%",
    height: 50,
    marginTop: 28,
    borderWidth: 1,
    borderColor: "#fff",
    marginLeft: "14%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
