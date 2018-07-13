import React from 'react'
import { View, Image } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import styles from './style'

const SummaryCard = (props) => {
    const { images, photo } = props
    return (
      <React.Fragment>
        {
          images[0].faces.map((u, i) => {
            return (
              <Card 
                key={i} 
                titleStyle={styles.cardTitle} 
                title="Analysis Summary" 
              >
                <View style={styles.centerX}>
                  <Image
                    style={styles.cardImage}
                    resizeMode="cover"
                    source={{ uri: photo.uri }}
                  />
                </View>                
                <ListItem title="Age" subtitle={u.attributes.age} leftIcon={{ name: "today" }} chevron={true}/>
                <ListItem title="Ethnicity" subtitle={`(asian: ${u.attributes.asian} - hispanic ${u.attributes.hispanic})`} leftIcon={{ name: "people-outline" }} chevron={false} />
                <ListItem title="Skin" subtitle={`(${u.attributes.black} - white: ${u.attributes.white})`} leftIcon={{ name: "pan-tool" }} chevron={false} />
                <ListItem title="Gender" subtitle={` ${u.attributes.gender.type}`} leftIcon={{ name: "wc" }} chevron={false} />
                <ListItem title="Glasses" subtitle={`${u.attributes.glasses}`} leftIcon={{ name: "face" }} chevron={false} />                
              </Card>
            )
          })
        }
      </React.Fragment>
    )
  }


export default SummaryCard