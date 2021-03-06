import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ImageContainer = props => {
  const {source, imageStyles} = props;
  return (
    <View style={styles.ImageContainer}>
      <Image source={source} style={{...styles.image, ...imageStyles}} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
export default ImageContainer;
