import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calendar from '@src/screens/Calendar';
import Routers, { CalendargNavigationParam } from '@src/routers/Routes';

const Stack = createNativeStackNavigator<CalendargNavigationParam>();

function CalendarStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Routers.Calendar}
        component={Calendar}
      />

    </Stack.Navigator>
  );
}

export default React.memo(CalendarStack);
