import React from 'react'
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  touchable: {
    flex: 0.3,
    alignSelf: 'flex-end'
  }
})

const CameraFlipBtn = ({onPress, type}) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      {
        type === 0 ? 
          <MaterialIcons  name="camera-front" size={45} color="white" /> : 
          <MaterialIcons  name="camera-rear" size={45} color="white" />
      }      
    </TouchableOpacity>
  )
}

export default CameraFlipBtn