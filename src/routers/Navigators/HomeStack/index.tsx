import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routers, { HomeNavigationParam } from '@src/routers/Routes';
import Home from '@src/screens/Home';

const Stack = createNativeStackNavigator<HomeNavigationParam>();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
      }}
    >
      <Stack.Screen
        name={Routers.Home}
        component={Home}
      />

    </Stack.Navigator>
  );
}

export default React.memo(HomeStack);
