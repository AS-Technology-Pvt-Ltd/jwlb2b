import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import fontSize from '../styles/fontSize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ScreenTitle = props => {
  const {title} = props;
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.empty}>
        <></>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: fontSize.screenTitle,
    fontWeight: '500',
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('10%'),
    marginBottom: hp('5%'),
  },
  empty: {width: '50%', borderWidth: 2, marginVertical: '5%'},
});
export default ScreenTitle;
