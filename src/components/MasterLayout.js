import React from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import colors from '../styles/colors';

class MasterLayout extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor={colors.lightBlue} />
        <View>{this.props.children}</View>
      </SafeAreaView>
    );
  }
}

export default MasterLayout;
