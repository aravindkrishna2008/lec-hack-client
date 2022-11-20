import React, {useEffect, useState} from 'react'
import {View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DetailTrips({ route, navigation: { navigate } }) {
  const [details, setDetails] = useState({})
  const { tid } = route.params

    useEffect(() => {
      console.log(tid)
      fetch(`https://LECHacksBackendServer.alphasquad.repl.co/hikes/get?hid=${tid}`)
        .then(r => r.json())
        .then(d => setDetails(d))
  }, [])
  
    
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(details)}</Text>
    </SafeAreaView>
  );
}
