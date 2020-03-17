import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import SignInWithOtp from '../screens/SignInWithOtp';
import PlaceAnOrder from '../screens/PlaceAnOrder';

const drawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
});
const AppNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    SignInWithOtp: {
      screen: SignInWithOtp,
    },
    App: {
      screen: createAppContainer(drawerNavigator),
    },
    PlaceAnOrder: {
      screen: PlaceAnOrder,
    },
  },
  {headerMode: null, initialRouteName: 'SignIn'},
);

export default createAppContainer(AppNavigator);
