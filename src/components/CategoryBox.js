import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ImageContainer from './ImageContainer';

const CategoryBox = props => {
  const {source, title, carrat, imageStyles} = props;
  return (
    <View>
      <View style={styles.imageView}>
        <ImageContainer source={source} style={imageStyles} />
      </View>
      <Text style={{textAlign: 'center'}}>{title}</Text>
      <Text style={{textAlign: 'center'}}>{carrat}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    width: 120,
    height: 120,
    marginBottom: 6,
    borderRadius: 5,
    borderWidth: 1,
    overflow: 'hidden',
  },
});
export default CategoryBox;
