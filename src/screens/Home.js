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
import fontSize from '../styles/fontSize';

class Home extends React.Component {
  render() {
    const dashboardIcon = [
      {
        id: 1,
        name: 'Bhaav Today',
        image: require('../assets/bag.png'),
      },
      {
        id: 2,
        name: 'Place An Order',
        image: require('../assets/placeorder.png'),
      },
      {
        id: 3,
        name: 'Customized Order',
        image: require('../assets/customiseorder.png'),
      },
      {
        id: 4,
        name: 'Track Your Order',
        image: require('../assets/delivery.png'),
      },
      {
        id: 5,
        name: 'Initiate Return',
        image: require('../assets/returnboy.png'),
      },
      {
        id: 6,
        name: 'Accounts',
        image: require('../assets/accounts.png'),
      },
      {
        id: 7,
        name: 'Book A Complaint',
        image: require('../assets/support.png'),
      },
      {
        id: 8,
        name: 'Support',
        image: require('../assets/support.png'),
      },
      {
        id: 9,
        name: 'Our Policy',
        image: require('../assets/policy.png'),
      },
      {
        id: 10,
        name: 'Campaigns',
        image: require('../assets/folder.png'),
      },
    ];
    const dashboardIconJSX = dashboardIcon.map(item => {
      return (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('PlaceAnOrder')}>
          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
              <ImageContainer source={item.image} />
            </View>
            <Text style={styles.titleName}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    });
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
          <View style={styles.content}>{dashboardIconJSX}</View>
        </ScrollView>
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({
  dashboardIcon: {
    width: 28,
    height: 28,
    alignSelf: 'center',
  },
  dashboardContainer: {
    flexDirection: 'row',
    marginTop: '2%',
    borderBottomWidth: 0.3,
  },
  titleName: {
    fontSize: fontSize.dashboard.title,
    textAlign: 'center',
    paddingTop: 10,
  },
  iconContainer: {
    width: 70,
    height: 80,
    paddingBottom: 5,
  },
  iconBox: {
    width: wp('32%'),
    height: 130,
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
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '86%',

    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Home;
