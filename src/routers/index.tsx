import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBottomNavGraph from './Navigators/TabBottomNavGraph';

const Stack = createNativeStackNavigator();

function NavigationGraph() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="root"
          component={TabBottomNavGraph}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default React.memo(NavigationGraph);
