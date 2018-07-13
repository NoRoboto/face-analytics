import React from 'react'
import {
  ScrollView
} from 'react-native'
import SummaryCard from './Card'
import styles from './style'

class Summary extends React.Component {
  render () {
    const { images, photo } = this.props

    return (
      <ScrollView contentContainerStyle={styles.scroll}>
        <SummaryCard images={images} photo={photo} />
      </ScrollView>
    )
  }
}

export default Summary