import React from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ApplicationProvider from '@src/providers/ApplicationProvider';


function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootViewContainer}>
      <ApplicationProvider>
        <StatusBar animated />
        <Text>Enter </Text>
      </ApplicationProvider>
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
