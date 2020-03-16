import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
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
        <View styles={styles.leftIcon}>
          <ImageContainer source={require('../assets/menu.png')} />
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text>Hello</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: 40,
  },
  leftContainer: {
    width: '10%',
    backgroundColor: 'red',
  },
  leftIcon: {
    width: '10%',
    borderWidth: 1,
    height: '10%',
    backgroundColor: 'red',
  },
  centerContainer: {
    width: '60%',
    backgroundColor: 'yellow',
  },
  rightContainer: {
    width: '20%',
    backgroundColor: 'pink',
  },
});
export default Header;
