import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImageContainer from './ImageContainer';
const InputField = props => {
  const {icon, placeholder, maxLength, onChangeText, value} = props;
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconContainer}>
        <ImageContainer source={icon} />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={placeholder}
          selectionColor={colors.lightBlue}
          style={styles.textInput}
          autoCapitalize="none"
          placeholderTextColor={colors.black}
          maxLength={maxLength}
          selectTextOnFocus={true}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderWidth: 3,
    padding: hp('1%'),
    borderRadius: 100,
    borderColor: colors.lightBlue,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    height: 50,

    marginVertical: hp('1%'),
  },
  iconContainer: {
    width: '10%',
    height: '100%',
    marginLeft: '1%',
  },
  textInput: {color: colors.black, paddingVertical: 2.5, paddingLeft: '2%'},
  textInputContainer: {
    width: '90%',
    padding: 5,
  },
});

export default InputField;
