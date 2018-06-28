import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card } from 'react-native-elements'
import styles from './style'

const SummaryCard = (props) => {
    const { images, photo } = props
    return (
      <React.Fragment>
        {
          images[0].faces.map((u, i) => {
            return (
              <Card key={i} titleStyle={styles.cardTitle} title="Analysis Summary" containerStyle={styles.cardWidth}>
                <View style={styles.centerX}>
                  <Image
                    style={styles.cardImage}
                    resizeMode="cover"
                    source={{ uri: photo.uri }}
                  />
                </View>
                <View>
                  <Text>Age: {u.attributes.age}</Text>
                  <Text>
                    Ethnicity: (asian: {u.attributes.asian} - hispanic: {u.attributes.hispanic} )
                  </Text>
                  <Text>Skin colour: (black: {u.attributes.black} - white: {u.attributes.white} )</Text>
                  <Text>Gender: {u.attributes.gender.type} </Text>
                  <Text>Glasses: {u.attributes.glasses} </Text>
                </View>
              </Card>
            )
          })
        }
      </React.Fragment>
    )
  }


export default SummaryCard