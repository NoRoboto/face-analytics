import React from 'react'
import {
  View,
} from 'react-native'
import { LinearGradient } from 'expo'
import SummaryCard from './Card'
import styles from './style'

class Summary extends React.Component {
  render () {
    const { navigation } = this.props
    const images = this.props.navigation.getParam('images', [])
    const photo = navigation.getParam('photo', "")
    return (<View style={styles.summary}>
      <LinearGradient style={styles.wrapper} colors={styles.colors}>
        <SummaryCard images={images} photo={photo} />
      </LinearGradient>
    </View>)
  }
}

export default Summary