import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import SwipeableView from '@src/components/uicomponents/SwipeableView/SwipeableView';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AnimatedList from '@src/components/uicomponents/AnimatedList/AnimatedList';

function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootViewContainer}>
      <AnimatedList />
    </GestureHandlerRootView>
  );

}

const styles = StyleSheet.create({
  gestureHandlerRootViewContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default App;
