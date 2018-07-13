import React from 'react'
import {
  View
} from 'react-native'
import styles from './style'
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;
import animationFile from '../../assets/loader1.json';

class Loader extends React.Component {

  state = { animation: animationFile }  

  componentDidMount () {
    this.animation.reset();
    this.animation.play();
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
      </View>
    )
  }
}

export default Loader