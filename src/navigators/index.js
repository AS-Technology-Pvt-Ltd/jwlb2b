import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
const AppNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    Home: {
      screen: Home,
    },
  },
  {headerMode: null, initialRouteName: 'Home'},
);

export default createAppContainer(AppNavigator);
