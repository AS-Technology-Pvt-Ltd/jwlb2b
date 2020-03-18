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

class PlaceAnOrderThird extends React.Component {
  render() {
    const subCategory = [
      {
        id: 1,
        title: 'Antique',
        image: require('../assets/antique.png'),
      },
      {
        id: 2,
        title: 'Light Rings',
        image: require('../assets/lightrings.png'),
      },
      {
        id: 3,
        title: 'Ultra Light Rings',
        image: require('../assets/ultralightrings.png'),
      },
      {
        id: 4,
        title: 'Umbrella Rings',
        image: require('../assets/umbrellarings.png'),
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
    height: '120%',
    borderWidth: 0.5,
    borderColor: colors.gray,
    borderRadius: 5,
    padding: '4%',
  },
  subCategoryBox: {
    borderRadius: 5,
    width: '26%',
    height: 90,
    padding: 2,
    marginVertical: '9%',
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

export default PlaceAnOrderThird;
