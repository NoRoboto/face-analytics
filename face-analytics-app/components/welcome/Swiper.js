import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from './style';
import Swiper from 'react-native-swiper';

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
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} activeDotColor={styles.activeDotColor}>
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
      </Swiper>
    );
  }
}
