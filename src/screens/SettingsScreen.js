import { StyleSheet, Button,  View } from 'react-native'
import React from 'react'
import { Auth } from 'aws-amplify'

const SettingsScreen = () => {
  return (
    <View>
      <Button title="Sign Out" onPress={() => {Auth.signOut()}} />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})