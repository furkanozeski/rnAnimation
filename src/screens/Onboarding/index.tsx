import { View, Text } from 'react-native';
import storage from '@react-native-firebase/storage';
import React from 'react';

const onBoardingPhotos = storage().ref('onboard1.jpg');

export default function Onboarding() {

  return (
    <View>
      <Text>Onboarding</Text>
    </View>
  );
}
