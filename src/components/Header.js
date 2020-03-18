import React from 'react';
import colors from '../styles/colors';
import ImageContainer from './ImageContainer';
import {Icon} from 'native-base';
import {View, StyleSheet, Alert, TouchableOpacity} from 'react-native';

const Header = props => {
  const stack = Object.keys(props.navigation).includes('toggleDrawer')
    ? false
    : true;

  const leftIcon = stack ? (
    <Icon type="FontAwesome" name="angle-left" style={styles.iconStyle} />
  ) : (
    <Icon type="Feather" name="menu" style={styles.iconStyle} />
  );
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
            {leftIcon}
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
    height: 42,
  },
  leftContainer: {
    width: '20%',
    paddingHorizontal: 12,
    marginTop: 13,
  },
  centerContainer: {
    width: '60%',
  },
  centerImageLogo: {height: 50},
  rightContainer: {
    width: '18%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rightIcon: {
    width: 30,
    height: 30,
    marginTop: 12,
  },
  headerBorder: {
    flexDirection: 'row',
    marginTop: '2%',
  },
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
  iconStyle: {
    color: colors.darkGray,
  },
});

export default Header;
