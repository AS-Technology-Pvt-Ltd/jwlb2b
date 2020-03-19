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
import CustomButton from '../components/CustomButton';
import {Icon} from 'native-base';
class SubCategory extends React.Component {
  render() {
    const CartItems = [
      {
        id: 1,
        image: require('../assets/1.jpg'),
        productDetails: '18-LR-BOR-5.5',
        purity: '18Kt',
        gross: '18 gm',
        net: '3gm',
        wastage: '5.5%',
        diamond: '0.1ct',
        fine: '1.2gm',
      },
      {
        id: 2,
        image: require('../assets/earrings.png'),
        productDetails: '18-LR-BOR-5.5',
        purity: '18Kt',
        gross: '18 gm',
        net: '3gm',
        wastage: '5.5%',
        diamond: '-',
        fine: '1.2gm',
      },
    ];

    const cartItemsJsx = CartItems.map(item => {
      return (
        <View style={styles.outerBox} key={item.id}>
          <View style={styles.cartBox}>
            <View style={styles.imageBox}>
              <ImageContainer
                source={item.image}
                imageStyles={{
                  height: 26,
                  width: 26,
                }}
              />
            </View>
            <View style={styles.titleHeadingSecond}>
              <Text style={styles.productText}>{item.productDetails}</Text>
              <Text
                style={{
                  fontSize: 8.5,
                  textAlign: 'center',
                  justifyContent: 'center',
                }}>
                {item.purity}
              </Text>
            </View>
            <View style={styles.titleHeading}>
              <Text style={styles.textFontTable}>{item.gross}</Text>
            </View>
            <View style={styles.titleHeading}>
              <Text style={styles.textFontTable}>{item.net}</Text>
            </View>
            <View style={styles.titleHeadingSecond}>
              <Text style={styles.textFontTable}>{item.wastage}</Text>
            </View>
            <View style={styles.titleHeadingSecond}>
              <Text style={styles.textFontTable}> {item.diamond}</Text>
            </View>
            <View style={styles.titleHeading}>
              <Text style={styles.textFontTable}>{item.fine}</Text>
            </View>
            <View style={styles.titleHeading}>
              <TouchableOpacity onPress={() => Alert.alert('Delete ')}>
                <Icon
                  name="trash"
                  type="FontAwesome"
                  style={{fontSize: 20, color: colors.darkRed}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    });
    const {navigation} = this.props;
    return (
      <MasterLayout>
        <Header navigation={navigation} />

        <ScrollView>
          <View>
            <Text style={styles.heading}> Shopping Cart</Text>
            <View style={styles.outerBox}>
              <View style={styles.cartBox}>
                <View style={[styles.titleHeading, styles.topLeftRadius]}>
                  <Text style={styles.textFontTable}>Image</Text>
                </View>
                <View style={styles.titleHeadingSecond}>
                  <Text style={styles.textFontTable}>Product Details</Text>
                </View>
                <View style={styles.titleHeading}>
                  <Text style={styles.textFontTable}>Gross Wt</Text>
                </View>
                <View style={styles.titleHeading}>
                  <Text style={styles.textFontTable}>Net Wt</Text>
                </View>
                <View style={styles.titleHeadingSecond}>
                  <Text style={styles.textFontTable}>Wastage</Text>
                </View>
                <View style={styles.titleHeadingSecond}>
                  <Text style={styles.textFontTable}>Diamond Wt</Text>
                </View>
                <View style={styles.titleHeading}>
                  <Text style={styles.textFontTable}>Fine Wt</Text>
                </View>
                <View
                  style={[styles.titleHeading, styles.topRightRadius]}></View>
              </View>
            </View>
            {cartItemsJsx}
            <View
              style={{
                borderBottomWidth: 0.5,
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRightWidth: 0.5,
                borderBottomEndRadius: 2,
                borderBottomLeftRadius: 2,
              }}>
              <View style={styles.cartBox}>
                <View style={styles.total}>
                  <Text style={styles.textFontTable}>Total Wt</Text>
                </View>

                <View style={styles.titleHeading}>
                  <Text style={styles.textFontTable}>36gm</Text>
                </View>
                <View style={styles.titleHeading}>
                  <Text style={styles.textFontTable}>6gm</Text>
                </View>
                <View style={styles.titleHeadingSecond}>
                  <Text style={styles.textFontTable}></Text>
                </View>
                <View style={styles.titleHeadingSecond}>
                  <Text style={styles.textFontTable}>0.1ct</Text>
                </View>
                <View style={styles.titleHeading}>
                  <Text style={styles.textFontTable}>2.4gm</Text>
                </View>
                <View style={styles.titleHeading}></View>
              </View>
            </View>
            <View style={{marginTop: hp('32%')}}>
              <View style={styles.commentBox}>
                <Text style={{alignSelf: 'center', paddingLeft: 5}}>
                  Add Comment(Using Voice or Text)...
                </Text>
                <Icon name="microphone" type="FontAwesome" />
              </View>
              <View style={styles.checkoutDetails}>
                <View style={styles.tableHeading}>
                  <Text style={styles.textFont}>Total Fine Wt</Text>
                  <Text style={styles.textFont}>3.7 gm</Text>
                </View>
                <View style={styles.tableHeading}>
                  <Text style={styles.textFont}>Gold Bhaav(without GST)</Text>
                  <Text style={styles.textFont}>40,000 INR</Text>
                </View>
                <View style={styles.tableHeading}>
                  <Text style={styles.textFont}>Diamond Charges</Text>
                  <Text style={styles.textFont}>1,000 INR</Text>
                </View>
                <View style={styles.tableHeading}>
                  <Text style={styles.textFont}>Total (incl. 3% GST)</Text>
                  <Text style={styles.textFont}>16,274 INR</Text>
                </View>
                <View style={styles.tableHeading}>
                  <Text style={styles.textFont}>
                    Logistics Charges(hub)incl. GST
                  </Text>
                  <Text style={styles.textFont}>590 INR</Text>
                </View>
                <View style={styles.tableHeading}>
                  <Text style={styles.textFont}>
                    Insurances Charges incl. GST
                  </Text>
                  <Text style={styles.textFont}>19 INR</Text>
                </View>
                <View style={styles.tableHeading}>
                  <Text style={styles.textFont}>Grand Total</Text>
                  <Text style={styles.textFont}>16,833 INR</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonView}>
          <View style={styles.shoppingButton}>
            <CustomButton title="Continue to Shopping" />
          </View>
          <View style={styles.checkoutButton}>
            <CustomButton title="Checkout" titleStyle={{color: colors.white}} />
          </View>
        </View>
        <View style={{borderWidth: 5, borderColor: colors.lightBlue}}></View>
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    paddingVertical: '5%',
    paddingLeft: '3%',
  },
  cartDetails: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
  },
  cartBox: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    width: '100%',
  },
  outerBox: {
    borderRightWidth: 0.3,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottomWidth: 0.2,
  },
  titleHeading: {
    flex: 0.8,
    alignSelf: 'stretch',
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
  },
  titleHeadingSecond: {
    flex: 1.5,
    alignSelf: 'stretch',
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
  },
  imageBox: {
    flex: 0.8,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    alignItems: 'center',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    padding: 1,
  },
  topLeftRadius: {
    borderTopLeftRadius: 2,
  },
  topRightRadius: {
    borderTopRightRadius: 2,
  },
  total: {
    flex: 2.41,
    alignSelf: 'stretch',
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    //borderRightWidth: 0.5,
    alignItems: 'center',
  },

  textFont: {
    fontSize: 10,
    padding: 3,
  },
  productText: {
    fontSize: 8.5,
    paddingVertical: 3,
    textAlign: 'center',
    justifyContent: 'center',
  },
  textFontTable: {
    fontSize: 8.5,
    padding: 3,
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: hp('1%'),
  },
  shoppingButton: {
    width: '40%',
  },
  checkoutButton: {
    width: '40%',
    backgroundColor: colors.darkGray,
  },
  commentBox: {
    backgroundColor: colors.lightGray,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    height: 40,
  },
  tableHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 2,
  },
  checkoutDetails: {
    backgroundColor: colors.lightGray,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    marginTop: '2%',
    borderRadius: 5,
    height: 142,
  },
});

export default SubCategory;
