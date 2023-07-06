import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate, interpolate, runOnJS, runOnUI, useAnimatedStyle, useSharedValue, withSpring, withTiming
} from 'react-native-reanimated';
import { View } from 'react-native';
import Dimension from '@constants/Dimension';
import TrashBinIcon from 'react-native-vector-icons/Feather';
import SwipeableViewProps from '@src/types/SwipeableViewPropType';
import styles from './styles';


const { SCREEN_WIDTH } = Dimension;
const THRESHOLD = -(SCREEN_WIDTH / 3);

function SwipeableView(props: SwipeableViewProps) {

  const {
    text, children, date, onDelete, leadingIcon, trailingIcon
  } = props;

  const swipeableViewTransX = useSharedValue(0);
  const swipeableViewHeight = useSharedValue(60);


  const trashBinOpacity = useSharedValue(0);
  const trashBinHeight = useSharedValue(64);

  const mainContainerMargin = useSharedValue(10);

  const swipeanleViewAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: swipeableViewTransX.value }],
    height: swipeableViewHeight.value,
  }));

  const trashBinAnimatedStyle = useAnimatedStyle(() => ({
    opacity: trashBinOpacity.value,
    height: trashBinHeight.value,
  }));

  const mainContainerAnimStyle = useAnimatedStyle(() => ({ marginVertical: mainContainerMargin.value }));

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {

      const transX = interpolate(event.translationX, [-SCREEN_WIDTH, 0], [-SCREEN_WIDTH, 0], Extrapolate.CLAMP);

      const _componentHeight = interpolate(
        transX,
        [
          THRESHOLD * 1.15,
          THRESHOLD * 1.12,
          THRESHOLD * 1.10,
          THRESHOLD * 1.07,
          THRESHOLD * 1.05,
          THRESHOLD * 1.02,
          THRESHOLD
        ],
        [0, 10, 20, 30, 40, 50, 60],
        Extrapolate.CLAMP
      );

      const _trashBinOpacity = interpolate(transX, [-100, -75, -50, -25, 0], [1, 0.75, 0.5, 0.25, 0], Extrapolate.CLAMP);


      swipeableViewTransX.value = withSpring(transX, { duration: 1000 });
      swipeableViewHeight.value = withTiming(_componentHeight, { duration: 333 });

      trashBinOpacity.value = withTiming(_trashBinOpacity, { duration: 100 });
      trashBinHeight.value = withTiming(_componentHeight + 2, { duration: 333 });

    })
    .onEnd((event) => {

      if (swipeableViewTransX.value < THRESHOLD && swipeableViewTransX.value < 0) {
        swipeableViewTransX.value = withTiming(-SCREEN_WIDTH, { duration: 333 });
        mainContainerMargin.value = withTiming(0, { duration: 333 }, (done) => {
          if (done && onDelete) {
            runOnJS(onDelete)(text);
          }
        });
      } else {
        swipeableViewTransX.value = withTiming(0, { duration: 333 });
        swipeableViewHeight.value = withTiming(60, { duration: 333 });
        trashBinHeight.value = withTiming(62, { duration: 333 });
        mainContainerMargin.value = withTiming(10, { duration: 0 });
      }
      trashBinOpacity.value = withTiming(0, { duration: 333 });

    })
  return (
    <GestureDetector
      gesture={panGesture}
    >
      <Animated.View style={[styles.mainContainer, mainContainerAnimStyle]}>
        <Animated.View style={[styles.swipeViewContainer, swipeanleViewAnimatedStyle]}>
          <View style={styles.leadingIconStyle}>
            {typeof leadingIcon === 'function' && leadingIcon(text)}
          </View>
          <Animated.Text style={styles.taskTextStyle}>
            {text}
          </Animated.Text>
          <View style={styles.trailingIconStyle}>
            {typeof trailingIcon === 'function' && trailingIcon()}
          </View>
        </Animated.View>
        <Animated.View style={[styles.deleteIconStyle, trashBinAnimatedStyle]}>
          <TrashBinIcon
            color="red"
            name="trash-2"
            size={23}
          />
        </Animated.View>
      </Animated.View>
    </GestureDetector>

  );

}

export default SwipeableView;
