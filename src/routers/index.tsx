import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '@src/screens/Onboarding';
import TabBottomNavGraph from './Navigators/TabBottomNavGraph';
import { TOP_LEVEL_NAVIGATIONS } from './Routes';

const Stack = createNativeStackNavigator();

function NavigationGraph() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {true ? (
            <Stack.Screen
              name="root"
              component={TabBottomNavGraph}
            />
          ) : (
            <Stack.Screen
              name={TOP_LEVEL_NAVIGATIONS.ONBOARDING}
              component={Onboarding}
            />
          )}

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default React.memo(NavigationGraph);
