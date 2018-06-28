import React from 'react'
import {
  Text,
  View,
  Vibration
} from 'react-native'
import { Camera, Permissions } from 'expo'
import { kairosDetect } from '../../api/kairos'
import FlipButton from '../buttons/CameraFlipBtn'
import CameraButton from '../buttons/CustomBtn'
import Loader from '../loader/Loader' 
import styles from './style'

class SnapShot extends React.Component {
  constructor () {
    super()
    this.state = {
      hasCameraPermission: false,
      type: Camera.Constants.Type.back,
      showSnapBtn: false,
      isLoading: false,
      isVibrating: false
    }
    this.camera = null
    this.onFlip = this.onFlip.bind(this)
    this.faceDetector = this.faceDetector.bind(this)
    this.takeSnap = this.takeSnap.bind(this)
  }

  faceDetector (facesData) {
    if(facesData.faces.length > 0) {
      if(!this.state.isVibrating) {
        Vibration.vibrate(100)
      }      
      this.setState({showSnapBtn: true, isVibrating: true})
    } else {
      this.setState({showSnapBtn: false, isVibrating: false})
    }
  }

  onFlip() {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    })
  }

  async takeSnap () {
    const { navigation } = this.props
    if(this.camera) {
      let photo = await this.camera.takePictureAsync({base64: true})
      this.setState({isLoading: true})
      const handleResponse = (error, response) => {
        if (error) {
          console.warn(error.message)
        } else {
          this.setState({isLoading: false})
          navigation.navigate('Summary', {images: response.body.images, photo: photo})
        }
      }
      kairosDetect(photo.base64, handleResponse)   
    }
  }

  async componentDidMount () {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  render () {
    const { hasCameraPermission, type, showSnapBtn, isLoading } = this.state

    if (isLoading)
      return (<Loader />)

    if (!hasCameraPermission)
      return (<Text>You Haven't Permissions</Text>)

    return (
      <View style={styles.wrapper}>
        <Camera ref={ref => { this.camera = ref }} style={styles.wrapper} type={type} 
          onFacesDetected={this.faceDetector} faceDetectionMode={Camera.Constants.FaceDetection.Mode.fast}>
        <View style={styles.cameraContainer}>
          <FlipButton onPress={this.onFlip} type={type} />
          {showSnapBtn && <CameraButton iconName="camera" color="green" onPress={this.takeSnap} />}
        </View>
        </Camera>
      </View>)
  }
}

export default SnapShot