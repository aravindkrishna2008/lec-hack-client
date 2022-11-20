import { getAuth } from "firebase/auth";
import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const AccountScreen = () => {

  const [details, setDetails] = React.useState({})
  const auth = getAuth()

  React.useEffect(() => {
    fetch(`https://LECHacksBackendServer.alphasquad.repl.co/users/get?uid=${auth.currentUser.uid}`)
      .then(r => r.json())
      .then(d => setDetails(d))
  })

  return (
    <SafeAreaView>
      <Text>Account Screen</Text>
      <View>
        <Text>{details.display}</Text>
        <Text>
          <MaterialIcons name="email" size={24} color="black" /> {details.email}
        </Text>
        <Text>
          <MaterialCommunityIcons
            name="map-marker-distance"
            size={24}
            color="black"
          />{" "}
          {details.miles} miles
        </Text>
        <Text>
          <Ionicons name="people" size={24} color="black" /> {details.followers}{" "}
          followers
        </Text>
        <FlatList
          data={details.events}
          renderItem={({ index, item }) => (
            <View>
              <Text>
                {JSON.stringify(item)}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default AccountScreen;
