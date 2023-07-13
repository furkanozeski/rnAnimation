/* eslint-disable global-require */
import React from 'react';
import {
  TouchableOpacity, Image, Text, View
} from 'react-native';
import { styles } from './style';

const onboardImages = [
  require('./img/onboard1.jpg'),
  require('./img/onboard2.jpg'),
  require('./img/onboard3.jpg'),
];

const onboardConstantTexts = [
  { headline: 'Manage your tasks', description: 'You can easily manage all of your daily tasks in DoMe for free' },
  { headline: 'Create daily routine', description: 'In Uptodo  you can create your personalized routine to stay productive' },
  { headline: 'Orgonaize your tasks', description: 'You can organize your daily tasks by adding your tasks into separate categories' },
];

const TOTAL_INDEX = onboardImages.length - 1;

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onNext = () => {
    if (currentIndex !== TOTAL_INDEX) {
      setCurrentIndex((prev) => { prev += 1; return prev; });
    }
  };

  const onPrev = () => {
    if (currentIndex <= TOTAL_INDEX && currentIndex !== 0) {
      setCurrentIndex((prev) => { prev -= 1; return prev; });
    }
  };


  return (
    <View style={styles.mainContainer}>
      <Image
        source={onboardImages[currentIndex]}
        style={{
          height: '40%',
          width: '56%',
          margin: 20,
          resizeMode: 'contain'
        }}

      />
      <View style={styles.dotContainerView}>
        {[...Array(onboardImages.length)].map((i, j) => (
          <View style={[styles.dotView, { backgroundColor: j === currentIndex ? 'rgba(10,10,10, .30)' : 'gray' }]} />
        ))}
      </View>

      <View style={{ justifyContent: 'flex-start', alignItems: 'center', width: '95%' }}>
        {[...Array(onboardConstantTexts.length)].map((i, j) => (

          j === currentIndex && (
            <>
              <View style={{ padding: 20, marginBottom: 30, marginTop: 34 }}>
                <Text style={{ fontSize: 32, fontWeight: '700', color: 'black' }}>
                  {onboardConstantTexts[j].headline}
                </Text>
              </View>
              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: '400', color: 'black' }}>
                  {onboardConstantTexts[j].description}
                </Text>
              </View>
            </>
          )
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPrev}>
          <Text style={{ fontSize: 16, fontWeight: '400', color: 'black' }}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext}>
          <Text style={{ fontSize: 16, fontWeight: '400', color: 'black' }}>{currentIndex !== onboardImages.length - 1 ? 'Next' : 'Get Started'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
