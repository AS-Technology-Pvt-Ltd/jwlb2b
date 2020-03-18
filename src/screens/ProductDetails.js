import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MasterLayout from '../components/MasterLayout';
import Header from '../components/Header';

import ImageContainer from '../components/ImageContainer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../styles/colors';
import fontSize from '../styles/fontSize';
import CustomButton from '../components/CustomButton';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      animationValue: new Animated.Value(80),
      viewState: true,
    };
  }
  toggleAmination = () => {
    if (this.state.viewState === true) {
      Animated.timing(this.state.animationValue, {
        toValue: 95,
        timing: 1500,
      }).start(() => {
        this.setState({viewState: false});
      });
    } else {
      Animated.timing(this.state.animationValue, {
        toValue: 95,
        timing: 1500,
      }).start(this.setState({viewState: true}));
    }
  };
  render() {
    const animatedStyle = {
      width: this.state.animationValue,
      height: this.state.animationValue,
    };

    const data = [
      {id: 1, image: require('../assets/product1.png')},
      {id: 2, image: require('../assets/product2.png')},
      {id: 3, image: require('../assets/product3.png')},
      {id: 4, image: require('../assets/product4.png')},
      {id: 5, image: require('../assets/product5.png')},
      {id: 6, image: require('../assets/product6.png')},
      {id: 7, image: require('../assets/product7.png')},
    ];
    const {navigation} = this.props;

    return (
      <MasterLayout>
        <Header navigation={navigation} />

        <View style={{height: '100%'}}>
          {/* <View style={styles.searchBarHeader}>
            <View style={styles.leftSearchBar}>
              <Text>hello</Text>
            </View>
            <View style={styles.rightSide}>
              <Text>hello</Text>
            </View>
          </View> */}
          <View style={styles.contentBox}>
            <View style={styles.leftImages}>
              <FlatList
                data={data}
                renderItem={({item, i}) => {
                  return (
                    <View style={{...styles.imageBox}} key={item.id}>
                      <ImageContainer
                        source={item.image}
                        imageStyles={{width: '100%', height: '100%'}}
                      />
                    </View>
                  );
                }}
              />
              {/* {scrollListImage} */}
            </View>
            <View style={styles.rightSide}>
              <View style={{height: 350, width: '100%'}}>
                <ImageContainer
                  source={require('../assets/product1.png')}
                  imageStyles={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </View>
              <View style={styles.priceContainer}>
                <View>
                  <Text>18-LR-BOM-5.5-152</Text>
                </View>
                <View>
                  <Text>Price</Text>
                </View>
              </View>
              <View style={styles.priceContainer}>
                <View>
                  <Text>Stock:1 Qty</Text>
                </View>
                <View>
                  <Text>Rs.33,194 INR</Text>
                </View>
              </View>
              <View style={styles.priceBreakup}>
                <Text style={styles.priceHeading}>Price Breakup -</Text>
                <View style={styles.sixBox}>
                  <View style={styles.box}>
                    <Text style={styles.textStyle}>Gold Wt.</Text>
                    <Text style={styles.textStyle}>Rs.</Text>
                  </View>
                  <View style={styles.box}>
                    <Text style={styles.textStyle}>Tunch</Text>
                    <Text style={styles.textStyle}>Rs.</Text>
                  </View>
                  <View style={styles.box}>
                    <Text style={styles.textStyle}>Wastage</Text>
                    <Text style={styles.textStyle}>Rs.</Text>
                  </View>
                  <View style={styles.box}>
                    <Text style={styles.textStyle}>Gold Rate</Text>
                    <Text style={styles.textStyle}>Rs.</Text>
                  </View>
                  <View style={styles.box}>
                    <Text style={styles.textStyle}>Labour Chrgs.</Text>
                    <Text style={styles.textStyle}>Rs.</Text>
                  </View>
                  <View style={styles.box}>
                    <Text style={styles.textStyle}>Taxes</Text>
                    <Text style={styles.textStyle}>Rs.</Text>
                  </View>
                </View>
              </View>
              <View style={styles.productDetails}>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>
                  Product Details
                </Text>
                <View style={{marginTop: '2%'}}>
                  <View style={styles.priceContainer}>
                    <View>
                      <Text style={styles.priceText}>Gold Weight(Approx)</Text>
                    </View>
                    <View>
                      <Text style={styles.priceText}>5,5392(gms)</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderWidth: 0.5,
                      marginVertical: '1%',
                    }}></View>
                  <View style={styles.priceContainer}>
                    <View>
                      <Text style={styles.priceText}>Product Weight</Text>
                    </View>
                    <View>
                      <Text style={styles.priceText}>5,5392(gms)</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 120}}>
                <View style={styles.buttonView}>
                  <CustomButton
                    title="Add to Cart"
                    onPress={() => alert.Alert('Add to cart')}
                  />
                </View>
                <View style={styles.buttonView}>
                  <CustomButton
                    title="Buy Now"
                    titleStyle={{color: colors.white}}
                    buttonStyle={{backgroundColor: colors.darkGray}}
                    onPress={() =>
                      this.props.navigation.navigate('CartPageOne')
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.bottomBox}>
              <Text style={styles.bottomText}>Net Wt(Gold) in cart</Text>

              <Text style={styles.bottomText}>10 Gm</Text>
            </View>
            <View style={styles.bottomBox}>
              <Text style={styles.bottomText}>Fine Wt(Gold) in cart</Text>
              <Text style={styles.bottomText}>8 Gm</Text>
            </View>
            <View style={styles.bottomBox}>
              <Text style={styles.bottomText}>Total items in cart</Text>
              <Text style={styles.bottomText}>2</Text>
            </View>
          </View>
        </View>
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({
  searchBarHeader: {flexDirection: 'row'},
  leftSearchBar: {borderWidth: 1},

  contentBox: {flexDirection: 'row'},
  leftImages: {
    //borderWidth: 1,
    width: '20%',
    padding: '2%',
  },
  imageBox: {height: 90, width: '90%'},
  rightSide: {
    // borderWidth: 1,
    width: '78%',
    borderWidth: 1,
  },
  priceContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  priceBreakup: {marginTop: '2%'},
  priceHeading: {color: colors.darkGray, fontSize: 11, marginTop: '1%'},
  priceText: {fontSize: 11},
  sixBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '1.5%',
  },
  box: {
    borderWidth: 0.5,
    borderColor: colors.lightBlue,
    padding: 4,
  },
  textStyle: {
    fontSize: fontSize.priceBreakup.price,
    paddingVertical: 1,
    color: colors.red,
  },
  productDetails: {
    marginTop: '5%',
    backgroundColor: colors.lightGray,
    padding: 5,
  },

  bottomView: {
    position: 'relative',
    bottom: '0%',
    zIndex: 999,
    flexDirection: 'row',
    borderWidth: 1,
    marginBottom: 0,
  },
  bottomBox: {
    flexGrow: 1,
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 12,
    color: colors.darkGray,
  },
  buttonView: {flexGrow: 1},
});

export default ProductDetails;
