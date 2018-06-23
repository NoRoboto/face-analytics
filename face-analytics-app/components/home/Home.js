import React from 'react'
import {
  Text,
  View
} from 'react-native'
import styles from './style'

class Home extends React.Component {
  render () {
    return (<View style={styles.home}>
      <Text style={styles.text}>Home</Text>
    </View>)
  }
}

export default Home