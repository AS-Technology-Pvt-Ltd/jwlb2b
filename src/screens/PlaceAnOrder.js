import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MasterLayout from '../components/MasterLayout';
import Header from '../components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import ImageContainer from '../components/ImageContainer';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../styles/colors';
import CategoryBox from '../components/CategoryBox';

class PlaceAnOrder extends React.Component {
  render() {
    return (
      <MasterLayout>
        <Header />
        <View style={{flexDirection: 'row', marginTop: '2%'}}>
          <View style={styles.dashboardBox}></View>
          <View style={styles.dashboardBoxIcon}></View>
          <View style={styles.dashboardBox}></View>
        </View>

        <ScrollView
          style={{height: '100%'}}
          contentContainerStyle={{paddingBottom: hp('40%')}}>
          <Text style={styles.heading}>Select Category</Text>
          <Text style={styles.subHeading}>
            Choose a category as per your requirements
          </Text>

          <View style={styles.twoBoxWrap}>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <CategoryBox
                source={require('../assets/4.jpg')}
                title="Gold Jwellery"
                carrat="18Kt"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <CategoryBox
                source={require('../assets/3.jpg')}
                title="Gold Jwellery"
                carrat="22Kt"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.twoBoxWrap}>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <CategoryBox
                source={require('../assets/2.jpg')}
                title="Diamond Jwellery"
                carrat="14Kt"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <CategoryBox
                source={require('../assets/1.jpg')}
                title="Diamond Jwellery"
                carrat="18Kt"
              />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: '14%', alignSelf: 'center'}}>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <CategoryBox
                source={require('../assets/fusion.jpg')}
                title="Diamond Jwellery"
                carrat="18Kt"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({
  dashboardIcon: {
    width: 28,
    height: 28,
    paddingBottom: 5,
    alignSelf: 'center',
  },
  twoBoxWrap: {
    flexDirection: 'row',
    width: wp('100%'),
    justifyContent: 'space-around',
    marginTop: hp('6%'),
  },
  iconContainer: {
    width: 60,
    height: 70,
    paddingBottom: 5,
  },

  iconBox: {
    width: wp('30%'),
    borderWidth: 1,
    borderColor: '#0F5B6D',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: hp('3%'),
  },
  heading: {
    paddingTop: 15,
    textAlign: 'center',
  },
  subHeading: {
    paddingTop: 10,
    textAlign: 'center',
    color: 'grey',
  },
  dashboardBox: {
    //borderWidth: 1,
    flexGrow: 1,
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'center',
    borderTopColor: colors.lightBlue,
    borderTopWidth: 4,
    marginTop: '3%',
  },
  dashboardBoxIcon: {
    //borderWidth: 1,
    marginTop: '3%',
    flexGrow: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 5,
    borderTopColor: colors.black,
    borderTopWidth: 4,
  },
});

export default PlaceAnOrder;
