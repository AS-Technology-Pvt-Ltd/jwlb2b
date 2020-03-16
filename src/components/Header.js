import React from 'react';
import {View, StyleSheet, Text, Alert, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../styles/colors';
import ImageContainer from './ImageContainer';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
          <ImageContainer source={require('../assets/menu.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.centerContainer}>
        <View style={{height: 50}}>
          <ImageContainer source={require('../assets/logo.png')} />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={{width: 30, height: 30, marginTop: 2}}>
          <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
            <ImageContainer source={require('../assets/search.png')} />
          </TouchableOpacity>
        </View>
        <View style={{width: 30, height: 30, marginTop: 2}}>
          <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
            <ImageContainer source={require('../assets/cart.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: 40,
  },
  leftContainer: {
    width: '13%',
    paddingHorizontal: 12,
  },

  centerContainer: {
    width: '62%',
  },
  rightContainer: {
    width: '20%',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //backgroundColor: 'pink',
  },
});
export default Header;
