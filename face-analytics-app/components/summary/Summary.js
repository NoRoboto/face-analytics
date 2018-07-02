import React from 'react'
import {
  View,
  ScrollView
} from 'react-native'
import { LinearGradient } from 'expo'
import SummaryCard from './Card'
import styles from './style'

class Summary extends React.Component {
  render () {
    const { navigation } = this.props
    const images = navigation.getParam('images', [])
    const photo = navigation.getParam('photo', "")
    return (<View style={styles.summary}>
      <LinearGradient style={styles.wrapper} colors={styles.colors}>
        <ScrollView>
          <SummaryCard images={images} photo={photo} />
        </ScrollView>
      </LinearGradient>
    </View>)
  }
}

export default Summary