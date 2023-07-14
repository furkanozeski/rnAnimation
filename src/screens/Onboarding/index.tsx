/* eslint-disable global-require */
import React, { useContext, useState, useEffect } from 'react';
import {
  TouchableOpacity, Image, Text, View
} from 'react-native';
import { ThemeValueContext } from '@src/providers/ThemeProvider/ThemeProvider';
import { useNavigation } from '@react-navigation/native';
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

  const navigation = useNavigation();

  const theme = useContext(ThemeValueContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(currentIndex === TOTAL_INDEX);

  useEffect(() => {
    if (currentIndex === TOTAL_INDEX) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [currentIndex]);


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
    <View style={[styles.mainContainer, { backgroundColor: theme?.colorScheme.background }]}>

      <TouchableOpacity onPress={onPrev} style={{ alignSelf: 'flex-start', marginLeft: 16, marginTop: 8 }}>
        <Text style={styles.prevButtonText}>Skip</Text>
      </TouchableOpacity>
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

      <View style={styles.textView}>
        {[...Array(onboardConstantTexts.length)].map((i, j) => (

          j === currentIndex && (
            <>
              <View style={styles.textViewHeadline}>
                <Text style={[styles.headlineText, { color: theme?.colorScheme.onPrimary }]}>
                  {onboardConstantTexts[j].headline}
                </Text>
              </View>
              <View style={{ padding: 20 }}>
                <Text style={[styles.descriptionText, { color: theme?.colorScheme.onPrimary }]}>
                  {onboardConstantTexts[j].description}
                </Text>
              </View>
            </>
          )
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPrev}>
          <Text style={styles.prevButtonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nextButton, { backgroundColor: theme?.colorScheme.primary }]}
          onPress={() => {
            onNext();
            if (isComplete) {
              navigation.navigate('intro');
            }
          }}
        >
          <Text style={[styles.nextButtonText, { color: theme?.colorScheme.onPrimary }]}>{!isComplete ? 'Next' : 'Get Started'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
