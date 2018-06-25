import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import styles from './style'

const Loader = () => {
  return (
    <View style={styles.view}>
      <ActivityIndicator size={60} color="#FFFFFF" />
      <Text style={styles.text}>Loading :D</Text>
    </View>)
}

export default Loader