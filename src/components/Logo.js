import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageContainer from './ImageContainer';

const Logo = () => {
  return (
    <View style={styles.container}>
      <ImageContainer source={require('../assets/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {height: 100, width: 200},
});

export default Logo;
