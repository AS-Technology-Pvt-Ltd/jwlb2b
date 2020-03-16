import React from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import colors from '../styles/colors';
import {color} from 'react-native-reanimated';

class MasterLayout extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.lightBlue} />
        <View style={styles.container}>{this.props.children}</View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});

export default MasterLayout;
