import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '@src/screens/Onboarding';
import Login from '@src/screens/Login';
import Register from '@src/screens/Register';
import Intro from '@src/screens/Onboarding/intro/intro';
import TabBottomNavGraph from './Navigators/TabBottomNavGraph';
import { TOP_LEVEL_NAVIGATIONS } from './Routes';

const Stack = createNativeStackNavigator();

function NavigationGraph() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {false ? (
            <Stack.Screen
              name="root"
              component={TabBottomNavGraph}
            />
          ) : (
            <>
              <Stack.Screen
                name={TOP_LEVEL_NAVIGATIONS.ONBOARDING}
                component={Onboarding}
              />
              <Stack.Screen
                name="intro"
                component={Intro}
              />
              <Stack.Screen
                name="login-after-onboard"
                component={Login}
              />
              <Stack.Screen
                name="register-after-onboard"
                component={Register}
              />
            </>
          )}

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default React.memo(NavigationGraph);
