import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignIn from '../screens/SignIn';
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

    PlaceAnOrder: {
      screen: PlaceAnOrder,
    },
    SubCategory: {
      screen: SubCategory,
    },
  },
  {headerMode: null, initialRouteName: 'SignIn'},
);

export default createAppContainer(AppNavigator);
