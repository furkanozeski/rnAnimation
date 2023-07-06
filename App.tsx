import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AnimatedList from '@src/components/uicomponents/AnimatedList/AnimatedList';


function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootViewContainer}>
      <StatusBar animated />
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
