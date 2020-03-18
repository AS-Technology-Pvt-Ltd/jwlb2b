import React from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import colors from '../styles/colors';

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
    flex: 1,
    backgroundColor: colors.white,
    height: '100%',
  },
});

export default MasterLayout;
