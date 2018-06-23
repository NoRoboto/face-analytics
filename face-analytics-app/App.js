import React from 'react';
import { Font, AppLoading } from "expo";
import Navigator from './components/navigator';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  async componentDidMount() {
    await Font.loadAsync({
      Arial: require("./assets/Arial.ttf")
    })
    this.setState({ loading: false })
  }

  render() {
    const {loading} =  this.state

    if (loading) 
      return (<AppLoading />)
    
    return (<Navigator />)
  
  }
}
