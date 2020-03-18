import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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

class PlaceAnOrder extends React.Component {
  render() {
    const jwelleryCategory = [
      {
        id: 1,
        name: 'Gold Jwellery',
        carrat: '18Kt',
        image: require('../assets/4.jpg'),
      },
      {
        id: 2,
        name: 'Gold Jwellery',
        carrat: '22Kt',
        image: require('../assets/3.jpg'),
      },
      {
        id: 3,
        name: 'Diamond Jwellery',
        carrat: '14Kt',
        image: require('../assets/2.jpg'),
      },
      {
        id: 4,
        name: 'Diamond Jwellery',
        carrat: '18Kt',
        image: require('../assets/1.jpg'),
      },
      {
        id: 5,
        name: 'Platinum Jwellery',
        carrat: '95%',
        image: require('../assets/fusion.jpg'),
      },
    ];
    const jwelleryCategoryJSX = jwelleryCategory.map(item => {
      return (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SubCategory')}>
          <View style={styles.imageTitleBox} key={item.id}>
            <View style={styles.imageView}>
              <ImageContainer
                source={item.image}
                imageStyles={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={{marginTop: '3%'}}>
              <Text style={styles.titleName}>{item.name}</Text>
              <Text style={styles.titleName}>{item.carrat}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
    const {navigation} = this.props;
    return (
      <MasterLayout>
        <Header navigation={navigation} />
        <ScrollView
          style={{height: '100%'}}
          contentContainerStyle={{paddingBottom: hp('40%')}}>
          <Text style={styles.heading}>Select Category</Text>
          <Text style={styles.subHeading}>
            Choose a category as per your requirements
          </Text>
          <View style={styles.categoryContent}>{jwelleryCategoryJSX}</View>
        </ScrollView>
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    paddingTop: 15,
    textAlign: 'center',
  },
  subHeading: {
    paddingTop: 10,
    textAlign: 'center',
    color: 'grey',
  },
  imageView: {
    width: 120,
    height: 120,
    borderRadius: 5,
    overflow: 'hidden',
  },
  imageTitleBox: {
    width: 120,
    height: 120,
    borderColor: colors.darkGray,
    alignItems: 'center',
    marginTop: hp('7%'),
  },
  titleName: {
    fontSize: fontSize.dashboard.title,
    textAlign: 'center',
  },
  categoryContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-around',
  },
});

export default PlaceAnOrder;
