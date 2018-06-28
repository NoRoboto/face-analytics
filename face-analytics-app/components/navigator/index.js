import {
  createStackNavigator
} from 'react-navigation';

import Home from "../home/Home"
import Welcome from "../welcome/Swiper"
import SnapShot from "../camera/SnapShot"
import Summary from "../summary/Summary"


export default createStackNavigator({
  Home,
  Welcome,
  Summary,
  SnapShot
}, {
  initialRouteName: 'SnapShot',
  headerMode: 'none'
})