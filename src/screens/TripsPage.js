import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getAuth } from 'firebase/auth'
import { SafeAreaView } from 'react-native-safe-area-context'

const TripsPage = () => {
  const [title, setTitle] = React.useState('')
  const [desc, setDesc] = React.useState('')
  const [route, setRoute] = React.useState('')
  const [number, onChangeNumber] = React.useState(null)
  const [cover, setCover] = React.useState()

  async function submit () {
    const auth = getAuth()
    const uid = auth.currentUser.uid
    const formData = new FormData()
    formData.append('title', title)
    formData.append('route', route)
    formData.append('desc', desc)
    formData.append('mileage', number)
    formData.append('uid', uid)
    const h = new Headers()
    h.append('Content-Type', 'multipart/form-data')
    await fetch('https://LECHacksBackendServer.alphasquad.repl.co/hikes/add', {
      method: 'POST',
      body: formData,
      headers: h
    })
  }

  return (
    <SafeAreaView>
      <TextInput placeholder='Title' onChangeText={setTitle} value={title} />
      <TextInput placeholder='Description' onChangeText={setDesc} value={desc} />
      <TextInput placeholder='Route Link' onChangeText={setRoute} value={route} />
      <TextInput
        placeholder='Mileage'
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={async () => await submit()}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({})
export default TripsPage
