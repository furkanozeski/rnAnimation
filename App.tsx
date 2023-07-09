import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ApplicationProvider from '@src/providers/AppProvider/ApplicationProvider';
import { Provider } from 'react-redux';
import { store } from '@src/store';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.gestureHandlerRootViewContainer}>
        <ApplicationProvider>
          <StatusBar animated />
        </ApplicationProvider>
      </GestureHandlerRootView>
    </Provider>
  );

}

const styles = StyleSheet.create({
  gestureHandlerRootViewContainer: {
    flex: 1,
  },
});

export default App;
