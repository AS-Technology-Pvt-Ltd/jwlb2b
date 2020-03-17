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

class SubCategory extends React.Component {
  render() {
    const subCategory = [
      {
        id: 1,
        title: 'Earrings',
        image: require('../assets/earrings.png'),
      },
      {
        id: 2,
        title: 'Ladies Rings',
        image: require('../assets/ladiesrings.png'),
      },
      {
        id: 3,
        title: 'Gents Rings',
        image: require('../assets/gentsrings.png'),
      },
      {
        id: 4,
        title: 'Pendant',
        image: require('../assets/pendant.png'),
      },
      {
        id: 5,
        title: 'Ladies Casting Rings',
        image: require('../assets/ladiescastingrings.png'),
      },
      {
        id: 6,
        title: 'Necklace',
        image: require('../assets/necklace.png'),
      },
      {
        id: 7,
        title: 'Gents Casting Rings',
        image: require('../assets/gentscastingrings.png'),
      },
      {
        id: 8,
        title: 'Bangles',
        image: require('../assets/bangles.png'),
      },
      {
        id: 9,
        title: 'Kanthi Sets',
        image: require('../assets/kanthisets.png'),
      },
      {
        id: 10,
        title: 'Mangalsutra',
        image: require('../assets/mangalsutra.png'),
      },
      {
        id: 11,
        title: 'Tika',
        image: require('../assets/tika.png'),
      },
      {
        id: 12,
        title: 'Nath',
        image: require('../assets/nath.png'),
      },
    ];

    const subCategoryJSX = subCategory.map(item => {
      return (
        <View style={styles.subCategoryBox} key={item.id}>
          <View style={styles.imageTextContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ProductDetails')}>
              <ImageContainer
                source={item.image}
                imageStyles={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.titleText}>{item.title}</Text>
        </View>
      );
    });
    const {navigation} = this.props;
    return (
      <MasterLayout>
        <Header navigation={navigation} />

        <ScrollView
          // style={{height: '100%'}}
          contentContainerStyle={{paddingBottom: hp('40%')}}>
          <Text style={styles.heading}>Select Sub Category</Text>
          <Text style={styles.subHeading}>
            Choose a sub category as per your requirements
          </Text>
          <View style={styles.content}>{subCategoryJSX}</View>
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
  imageTextContainer: {
    width: '100%',
    height: '130%',
    borderWidth: 0.5,
    borderColor: colors.gray,
    borderRadius: 5,
    padding: '4%',
  },
  subCategoryBox: {
    borderRadius: 5,
    width: '26%',
    height: 110,
    padding: 2,
    marginVertical: '6%',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: '2%',
  },
  titleText: {
    marginTop: '6%',
    textAlign: 'center',
    fontSize: fontSize.subcategory.title,
  },
});

export default SubCategory;
