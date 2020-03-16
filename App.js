import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SignIn from './src/screens/SignIn';
import MasterLayout from './src/components/MasterLayout';

const App = () => {
  return (
    <MasterLayout>
      <SignIn />
    </MasterLayout>
  );
};

export default App;
