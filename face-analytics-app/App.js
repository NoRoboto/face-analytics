import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, AppLoading } from "expo";
import Example from './components/welcome/Swiper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Arial: require("./assets/Arial.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    const {loading} =  this.state

    if (loading) 
      return (<AppLoading />)
    
    return (<Example />)
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});