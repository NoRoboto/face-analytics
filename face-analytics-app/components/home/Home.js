import React from 'react'
import {
  Text,
  View
} from 'react-native'
import styles from './style'
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;
import animationFile from '../../assets/loader1.json';

class Home extends React.Component {

  constructor () {
    super()
    this.state = { animation: animationFile }
    this.playAnimation = this.playAnimation.bind(this)
  }

  componentDidMount () {
    this.animation.reset();
    this.animation.play();
  }

  playAnimation () {
    console.log("hi")
  }

  render () {
    return (
      <View style={styles.home}>
        {this.state.animation &&
        <Lottie
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: 'black',
          }}
          source={this.state.animation}
        />}
      {/* <View style={styles.buttonContainer}>
          <Button title="Restart Animation" onPress={this._playAnimation} />
        </View> */}
      </View>
    )
  }
}

export default Home