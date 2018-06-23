import {
  createStackNavigator
} from 'react-navigation';

import Home from "../home/Home"
import Welcome from "../welcome/Swiper"
import SnapShot from "../camera/SnapShot"

export default createStackNavigator({
  Home: Home,
  Welcome: Welcome,
  SnapShot: SnapShot
}, {
  initialRouteName: 'SnapShot',
  headerMode: 'none'
})