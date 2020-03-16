import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import InputField from '../components/InputField';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImageContainer from '../components/ImageContainer';
import colors from '../styles/colors';
import Logo from '../components/Logo';
import Navigator from '../components/Navigator';
import ScreenTitle from '../components/ScreenTitle';

export default class SignIn extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        disabled>
        <View style={styles.logo}>
          <Logo />
        </View>
        <ScreenTitle title="LOGIN INTO YOUR ACCOUNT" />
        <InputField
          icon={require('../assets/phone.png')}
          placeholder={'Enter Your Mobile No or Email Id'}
          maxLength={22}
        />
        <InputField
          icon={require('../assets/lock.png')}
          placeholder={'Your Password'}
          maxLength={12}
        />
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <ImageContainer source={require('../assets/forward.png')} />
          </View>
        </TouchableOpacity>

        <View style={styles.customNavigator}>
          <Navigator title={'Or,Sign In Using OTP'} />
        </View>
        <View style={styles.navigator}>
          <View>
            <Navigator title={'Sign Up'} />
          </View>
          <View>
            <Navigator title={'Forgot Password ?'} />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: wp('80%'),
    marginHorizontal: wp('10%'),
    height: '100%',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 200,
    padding: 10,
    marginHorizontal: '43.5%',
    marginTop: hp('1%'),
    backgroundColor: colors.lightBlue,
  },
  logo: {
    marginHorizontal: '20%',
    marginVertical: '6%',
  },
  customNavigator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigator: {flexDirection: 'row', justifyContent: 'space-between'},
});
