import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Navigator = props => {
  const {title, handler} = props;
  return (
    <TouchableOpacity onPress={handler}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.blue,
    textDecorationLine: 'underline',
  },
  titleContainer: {
    marginVertical: hp('5%'),
  },
});
export default Navigator;
