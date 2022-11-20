import React, { useState, useEffect } from 'react'
import { View, FlatList, Text, TouchableOpacity, SafeAreaView } from 'react-native'

export default function FindTrips ({ navigation: { navigate } }) {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    fetch('https://LECHacksBackendServer.alphasquad.repl.co/hikes/all')
      .then(res => res.json())
      .then(data => setTrips(data))
  }, [])

  return (
    <SafeAreaView>
      <FlatList
        renderItem={({ index, item }) => {
          return (
              <TouchableOpacity key={`find-trips-item-${index}`} onPress={() => navigate('SpecTrip', {
                tid: item.hid
              })}>
              <Text>{item.title}</Text>
                  <Text>
                      {JSON.stringify(item)}
                {item.miles} miles by {item.user}
              </Text>
            </TouchableOpacity>
          )
        }}
        data={trips}
      />
    </SafeAreaView>
  )
}
