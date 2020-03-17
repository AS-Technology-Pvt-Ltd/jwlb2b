import React from 'react';
import {View, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import ImageContainer from './ImageContainer';
const Header = props => {
  const stack = Object.keys(props.navigation).includes('toggleDrawer')
    ? false
    : true;
  const leftIcon = stack
    ? require('../assets/chevron.png')
    : require('../assets/menu.png');
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <TouchableOpacity
            onPress={() =>
              stack
                ? props.navigation.goBack()
                : props.navigation.toggleDrawer()
            }>
            <ImageContainer source={leftIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.centerImageLogo}>
            <ImageContainer source={require('../assets/logo.png')} />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.rightIcon}>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <ImageContainer source={require('../assets/search.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.rightIcon}>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <ImageContainer source={require('../assets/cart.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.headerBorder}>
        <View style={styles.dashboardBox}></View>
        <View style={styles.dashboardBoxIcon}></View>
        <View style={styles.dashboardBox}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: 40,
  },
  leftContainer: {
    width: '13%',
    paddingHorizontal: 12,
    marginTop: 10,
  },
  centerContainer: {
    width: '62%',
  },
  centerImageLogo: {height: 50},
  rightContainer: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rightIcon: {width: 30, height: 30, marginTop: 10},
  headerBorder: {flexDirection: 'row', marginTop: '2%'},
  dashboardBox: {
    flexGrow: 1,
    flexDirection: 'row',
    borderTopColor: colors.lightBlue,
    borderTopWidth: 4,
    marginTop: '2%',
  },
  dashboardBoxIcon: {
    marginTop: '2%',
    flexGrow: 2,
    flexDirection: 'row',
    borderTopColor: colors.black,
    borderTopWidth: 4,
  },
});

export default Header;
