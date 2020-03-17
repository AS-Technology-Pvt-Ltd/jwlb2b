import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
    return (
      <MasterLayout>
        <Header />

        <ScrollView
          // style={{height: '100%'}}
          contentContainerStyle={{paddingBottom: hp('40%')}}>
          <Text style={styles.heading}>Select Sub Category</Text>
          <Text style={styles.subHeading}>
            Choose a sub category as per your requirements
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: '8%',
            }}>
            <View style={styles.subCategoryBox}>
              <ImageContainer
                source={require('../assets/earrings.png')}
                imageStyles={{width: '100%', height: '100%'}}
              />
              <Text style={styles.titleText}>Earrings</Text>
            </View>
            <View style={styles.subCategoryBox}>
              <ImageContainer source={require('../assets/ladiesrings.png')} />
              <Text style={styles.titleText}>Ladies Rings</Text>
            </View>
            <View style={styles.subCategoryBox}>
              <ImageContainer source={require('../assets/gentsrings.png')} />
              <Text style={styles.titleText}>Gents Rings</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: '5%',
            }}>
            <View style={styles.subCategoryBox}>
              <ImageContainer source={require('../assets/pendant.png')} />
              <Text style={styles.titleText}>Pendant</Text>
            </View>
            <View style={styles.subCategoryBox}>
              <ImageContainer
                source={require('../assets/ladiescastingrings.png')}
              />
              <Text style={styles.titleText}>Ladies Casting Rings</Text>
            </View>
            <View style={styles.subCategoryBox}>
              <ImageContainer source={require('../assets/necklace.png')} />
              <Text style={styles.titleText}>Necklace</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: '5%',
            }}>
            <View style={styles.subCategoryBox}>
              <ImageContainer
                source={require('../assets/gentscastingrings.png')}
              />
              <Text style={styles.titleText}>Gents Casting Rings</Text>
            </View>
            <View style={styles.subCategoryBox}>
              <ImageContainer source={require('../assets/bangles.png')} />
              <Text style={styles.titleText}>Bangles</Text>
            </View>
            <View style={styles.subCategoryBox}>
              <ImageContainer source={require('../assets/kanthisets.png')} />
              <Text style={styles.titleText}>Kanthi Sets</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: '5%',
            }}>
            <View style={styles.subCategoryBox}>
              <ImageContainer source={require('../assets/mangalsutra.png')} />
              <Text style={styles.titleText}>Mangalsutra</Text>
            </View>
            <View style={styles.subCategoryBox}>
              <ImageContainer source={require('../assets/tika.png')} />
              <Text style={styles.titleText}>Tika</Text>
            </View>
            <View style={styles.subCategoryBox}>
              <ImageContainer source={require('../assets/nath.png')} />
              <Text style={styles.titleText}>Nath</Text>
            </View>
          </View>
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
  subCategoryBox: {
    borderWidth: 0.5,
    borderColor: colors.gray,
    borderRadius: 5,
    width: '26%',
    height: 110,
    padding: 2,
  },
  titleText: {
    textAlign: 'center',
    fontSize: fontSize.subcategory.title,
  },
});

export default SubCategory;
