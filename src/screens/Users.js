import React, { useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Users () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://LECHacksBackendServer.alphasquad.repl.co/users/leaderboard')
      .then(r => r.json())
      .then(d => setUsers(d))
  }, [])

  async function follow (uid) {
    fetch(`https://LECHacksBackendServer.alphasquad.repl.co/users/follow?uid=${uid}`)
  }

    return (
      <SafeAreaView>
        <FlatList
          data={users}
          renderItem={({ index, item }) => (
            <View key={`lec-users-id-render-${index}`}>
              <Text>
                {item.display == null || item.display === "null"
                  ? "Anonymous"
                  : item.display}
              </Text>
              <Text>{item.miles}</Text>
              <AntDesign
                name="heart"
                onPress={async () => await follow(item.uid)}
              />
            </View>
          )}
        />
      </SafeAreaView>
    );
}
