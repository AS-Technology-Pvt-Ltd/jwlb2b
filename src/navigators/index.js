import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SignIn from '../screens/SignIn';
import SignInWithOtp from '../screens/SignInWithOtp';
import PlaceAnOrder from '../screens/PlaceAnOrder';
import SubCategory from '../screens/SubCategory';
import ProductDetails from '../screens/ProductDetails';
import PlaceAnOrderThird from '../screens/PlaceAnOrderThird';
import CartPageOne from '../screens/CartPageOne';
import Home from '../screens/Home';
import colors from '../styles/colors';
import fontSize from '../styles/fontSize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DashBoardItems = ({handler, title}) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View style={styles.menuItem}>
        <Text style={styles.menu} t>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const CustomDrawerComponent = props => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/avatar.png')}
            style={styles.avatar}
          />

          <Text style={styles.name}>Welcome, Admin</Text>
        </View>
      </TouchableOpacity>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{paddingBottom: hp('20%')}}>
        <DashBoardItems
          handler={() => {
            Alert.alert('under development');
          }}
          title={'My Account'}
        />
        <DashBoardItems
          handler={() => props.navigation.toggleDrawer()}
          title={'Dashboard'}
        />
        <DashBoardItems
          handler={() => Alert.alert('under development')}
          title={'Offers'}
        />
        <DashBoardItems
          handler={() => Alert.alert('under development')}
          title={'New Arrivals'}
        />
        <DashBoardItems
          handler={() => Alert.alert('under development')}
          title={'Gold Jewellery'}
        />
        <DashBoardItems
          handler={() => Alert.alert('under development')}
          title={'Diamond Jewellery'}
        />
        <DashBoardItems
          handler={() => Alert.alert('under development')}
          title={'Platinum Jewellery'}
        />
        <DashBoardItems
          handler={() => Alert.alert('under development')}
          title={'Collections'}
        />
        <DashBoardItems
          handler={() => Alert.alert('under development')}
          title={'Account'}
        />
        <DashBoardItems
          handler={() => Alert.alert('under development')}
          title={'Supports'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const Dashboard = createAppContainer(
  createDrawerNavigator(
    {
      Home: Home,
    },
    {contentComponent: CustomDrawerComponent},
  ),
);
const AppNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    SignInWithOtp: {
      screen: SignInWithOtp,
    },
    Dashboard: {screen: Dashboard},
    PlaceAnOrder: {
      screen: PlaceAnOrder,
    },
    SubCategory: {
      screen: SubCategory,
    },
    ProductDetails: {
      screen: ProductDetails,
    },
    CartPageOne: {
      screen: CartPageOne,
    },
    PlaceAnOrderThird: {
      screen: PlaceAnOrderThird,
    },
  },
  {headerMode: null, initialRouteName: 'Dashboard'},
);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.lightBlue},
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.5,
  },
  avatar: {width: 100, height: 100, borderRadius: 100},
  name: {fontWeight: '700', marginVertical: 5},
  menuItem: {
    borderBottomWidth: 0.5,
    padding: '3%',
    borderBottomColor: colors.gray,
    borderTopColor: colors.gray,
  },
  menu: {fontWeight: '400', color: colors.white, fontSize: fontSize.menu.title},
  scrollView: {height: '100%'},
});
export default createAppContainer(AppNavigator);
