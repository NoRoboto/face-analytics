import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import Summary from '../summary/Summary'
import styles from './style';

export default class Example extends Component {

  constructor () {
    super()
    this.launchCamera = this.launchCamera.bind(this)
  }

  launchCamera () {
    const {navigation} = this.props
    navigation.push('SnapShot')
  }

  render() {
    console.warn(`Last render at: ${new Date()}`)
    const { navigation } = this.props
    const images = navigation.getParam('images', [])
    const photo = navigation.getParam('photo', "")

    return (
      <Swiper 
        style={styles.wrapper} 
        showsButtons={false} 
        loop={false} 
        activeDotColor={styles.activeDotColor}
        index={images.length > 0 ? 2 : 0}
      >
        <View style={styles.slide1}>
        <Text style={styles.title}>Face Analytics</Text>
          <Text style={styles.title}>Welcome User!</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.title}>Next, take a selfie!</Text>
          <View style={styles.wrapper}>
            <Button 
              title='Launch Camera' 
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
              onPress={this.launchCamera}
              outline
              large
            />
          </View>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.title}>Face Summary</Text>
          {(images.length > 0) && (<Summary images={images} photo={photo} />)}
        </View>
      </Swiper>
    );
  }
}
