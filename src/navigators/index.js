import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import SignInWithOtp from '../screens/SignInWithOtp';
import PlaceAnOrder from '../screens/PlaceAnOrder';
import SubCategory from '../screens/SubCategory';
const AppNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    SignInWithOtp: {
      screen: SignInWithOtp,
    },
    Home: {
      screen: Home,
    },
    PlaceAnOrder: {
      screen: PlaceAnOrder,
    },
    SubCategory: {
      screen: SubCategory,
    },
  },
  {headerMode: null, initialRouteName: 'Home'},
);

export default createAppContainer(AppNavigator);
