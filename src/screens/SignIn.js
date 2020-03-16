import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
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
import MasterLayout from '../components/MasterLayout';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      userEmailorPhone: '',
      password: '',
    };
  }

  signInHandler = () => {
    const {userEmailorPhone, password} = this.state;
    if (userEmailorPhone && password) {
      if (
        userEmailorPhone === 'admin@xyz.com' ||
        (userEmailorPhone === '1234567890' && password === 'Admin12@')
      ) {
        this.props.navigation.navigate('Home');
      } else {
        Alert.alert('Input parameters are not valid');
      }
    } else {
      Alert.alert('Input parameters are not valid');
    }
  };

  userEmailorPhoneHandler = value => {
    this.setState({userEmailorPhone: value});
  };
  userPasswordHandler = value => {
    this.setState({password: value});
  };
  render() {
    const {userEmailorPhone, password} = this.state;
    return (
      <MasterLayout>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          disabled>
          <View style={styles.logo}>
            <Logo />
          </View>
          <ScreenTitle title="LOG INTO YOUR ACCOUNT" />
          <InputField
            icon={require('../assets/phone.png')}
            placeholder={'Enter Your Mobile No or Email Id'}
            maxLength={22}
            value={userEmailorPhone}
            onChangeText={this.userEmailorPhoneHandler}
          />
          <InputField
            icon={require('../assets/lock.png')}
            placeholder={'Your Password'}
            maxLength={12}
            value={password}
            onChangeText={this.userPasswordHandler}
          />
          <TouchableOpacity onPress={() => this.signInHandler()}>
            <View style={styles.iconContainer}>
              <ImageContainer source={require('../assets/forward.png')} />
            </View>
          </TouchableOpacity>

          <View style={styles.customNavigator}>
            <Navigator
              title={'Or,Sign In Using OTP'}
              handler={() => this.props.navigation.navigate('SignInWithOtp')}
            />
          </View>
          <View style={styles.navigator}>
            <View>
              <Navigator
                title={'Sign Up'}
                handler={() => Alert.alert('Under Development')}
              />
            </View>
            <View>
              <Navigator
                title={'Forgot Password ?'}
                handler={() => Alert.alert('Under Development')}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </MasterLayout>
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
