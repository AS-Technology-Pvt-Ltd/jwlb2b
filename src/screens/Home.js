import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import MasterLayout from '../components/MasterLayout';
import Header from '../components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import ImageContainer from '../components/ImageContainer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../styles/colors';

class Home extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <MasterLayout>
        <Header navigation={navigation} />
        <View style={styles.dashboardContainer}>
          <View style={styles.dashboardBox}>
            <View style={styles.dashboardIcon}>
              <ImageContainer source={require('../assets/key.png')} />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.fontSize}>100+ Products </Text>
              <Text style={styles.fontSize}>We Add Everyday</Text>
            </View>
          </View>
          <View style={styles.dashboardBoxIcon}>
            <View style={styles.dashboardIcon}>
              <ImageContainer source={require('../assets/deliveryboy.png')} />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.fontSize}>Fastest & Insured</Text>
              <Text style={styles.fontSize}>Delivery at Counter</Text>
            </View>
          </View>
          <View style={styles.dashboardBox}>
            <View style={styles.dashboardIcon}>
              <ImageContainer source={require('../assets/back.png')} />
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.fontSize}>Easy Return </Text>
              <Text style={styles.fontSize}>Policy</Text>
            </View>
          </View>
        </View>

        <ScrollView
          style={{height: '100%'}}
          contentContainerStyle={{paddingBottom: hp('40%')}}>
          <View style={styles.twoBoxWrap}>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <View style={styles.iconBox}>
                <View style={styles.iconContainer}>
                  <ImageContainer source={require('../assets/bag.png')} />
                </View>
                <Text>Bhaav Today</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PlaceAnOrder')}>
              <View style={styles.iconBox}>
                <View style={styles.iconContainer}>
                  <ImageContainer
                    source={require('../assets/placeorder.png')}
                  />
                </View>
                <Text>Place An Order</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.twoBoxWrap}>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <View style={styles.iconBox}>
                <View style={styles.iconContainer}>
                  <ImageContainer
                    source={require('../assets/customiseorder.png')}
                  />
                </View>
                <Text>Customized Order</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <View style={styles.iconBox}>
                <View style={styles.iconContainer}>
                  <ImageContainer source={require('../assets/delivery.png')} />
                </View>
                <Text style={{flex: 1, flexWrap: 'wrap'}}>
                  Track Your Order
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.twoBoxWrap}>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <View style={styles.iconBox}>
                <View style={styles.iconContainer}>
                  <ImageContainer source={require('../assets/returnboy.png')} />
                </View>
                <Text>Initiate Return</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <View style={styles.iconBox}>
                <View style={styles.iconContainer}>
                  <ImageContainer source={require('../assets/accounts.png')} />
                </View>
                <Text>Accounts</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.twoBoxWrap}>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <View style={styles.iconBox}>
                <View style={styles.iconContainer}>
                  <ImageContainer source={require('../assets/support.png')} />
                </View>
                <Text>Book A Complaint</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <View style={styles.iconBox}>
                <View style={styles.iconContainer}>
                  <ImageContainer source={require('../assets/support.png')} />
                </View>
                <Text>Support</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.twoBoxWrap}>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <View style={styles.iconBox}>
                <View style={styles.iconContainer}>
                  <ImageContainer source={require('../assets/policy.png')} />
                </View>
                <Text>Our Policy</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Under Development')}>
              <View style={styles.iconBox}>
                <View style={styles.iconContainer}>
                  <ImageContainer source={require('../assets/folder.png')} />
                </View>
                <Text>Campaigns</Text>
              </View>
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
  dashboardContainer: {
    flexDirection: 'row',
    marginTop: '2%',
    borderBottomWidth: 0.3,
  },
  twoBoxWrap: {
    flexDirection: 'row',
    width: wp('100%'),
    justifyContent: 'space-around',
  },
  iconContainer: {
    width: 60,
    height: 70,
    paddingBottom: 5,
  },
  iconBox: {
    width: wp('30%'),
    borderWidth: 1,
    borderColor: colors.darkGray,
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: hp('3%'),
  },
  fontSize: {
    fontSize: 9,
    textAlign: 'center',
  },
  dashboardBox: {
    flexGrow: 1,
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'center',
  },
  dashboardBoxIcon: {
    flexGrow: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 5,
  },
});

export default Home;
