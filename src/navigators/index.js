import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignIn from '../screens/SignIn';
import SignInWithOtp from '../screens/SignInWithOtp';
import PlaceAnOrder from '../screens/PlaceAnOrder';
import SubCategory from '../screens/SubCategory';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
const Dashboard = createAppContainer(
  createDrawerNavigator({
    Home: Home,
  }),
);
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
    Dashboard: {screen: Dashboard},
    ProductDetails: {
      screen: ProductDetails,
    },
  },
  {headerMode: null, initialRouteName: 'Dashboard'},
);

export default createAppContainer(AppNavigator);
