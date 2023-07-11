import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routers, { FocusNavigationParam } from '@src/routers/Routes';
import Focus from '@src/screens/Focus';

const Stack = createNativeStackNavigator<FocusNavigationParam>();

function FocusStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Routers.Focus}
        component={Focus}
      />

    </Stack.Navigator>
  );
}

export default React.memo(FocusStack);
