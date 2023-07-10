import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routers, { ProfileNavigationParam } from '@src/routers/Routes';
import Profile from '@src/screens/Profile';

const Stack = createNativeStackNavigator<ProfileNavigationParam>();

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
      }}
    >
      <Stack.Screen
        name={Routers.Profile}
        component={Profile}
      />

    </Stack.Navigator>
  );
}

export default React.memo(ProfileStack);
