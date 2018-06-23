import React from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { Camera, Permissions } from 'expo'
import FlipButton from '../buttons/CameraFlipBtn'
import CameraButton from '../buttons/CustomBtn'
import styles from './style'

class SnapShot extends React.Component {
  constructor () {
    super()
    this.state = {
      hasCameraPermission: false,
      type: Camera.Constants.Type.back
    }
    this.onFlip = this.onFlip.bind(this)
  }

  onFlip() {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    })
  }

  async componentDidMount () {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  render () {
    const { hasCameraPermission, type } = this.state
    return (
    <View style={styles.wrapper}>
      <Camera style={styles.wrapper} type={type}>
      <View style={styles.cameraContainer}>
        <FlipButton onPress={this.onFlip} type={type} />
        <CameraButton iconName="camera" />
       </View>
      </Camera>
    </View>)
  }
}

export default SnapShot