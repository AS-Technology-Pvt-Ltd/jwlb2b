import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CustomButton = props => {
  const {onPress, title, buttonStyle, titleStyle} = props;
  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={{...styles.buttonWrap, ...buttonStyle}}>
          <Text style={{...styles.titleStyle, ...titleStyle}}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    textAlign: 'center',
    color: colors.darkGray,
    paddingVertical: 10,
  },
  buttonWrap: {
    borderWidth: 1,
    borderColor: colors.darkGray,
  },
});

export default CustomButton;
