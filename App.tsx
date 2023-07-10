import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from '@src/store';
import CustomAppProvider from '@src/providers';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.gestureHandlerRootViewContainer}>
        <CustomAppProvider />
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
