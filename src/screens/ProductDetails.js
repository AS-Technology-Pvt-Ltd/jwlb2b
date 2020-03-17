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

class ProductDetails extends React.Component {
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
        </ScrollView>
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({});

export default ProductDetails;
