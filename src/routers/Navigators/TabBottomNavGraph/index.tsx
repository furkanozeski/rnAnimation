import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationParams, TOP_LEVEL_NAVIGATIONS } from '@src/routers/Routes';
import Onboarding from '@src/screens/Onboarding';
import HomeStack from '../HomeStack';
import CalendarStack from '../CalendarStack';
import TaskStack from '../TaskStack';
import FocusStack from '../FocusStack';
import ProfileStack from '../ProfileStack';

const Tab = createBottomTabNavigator<NavigationParams>();

function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={TOP_LEVEL_NAVIGATIONS.HOME}
        component={Onboarding}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen
        name={TOP_LEVEL_NAVIGATIONS.CALENDAR}
        component={CalendarStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarLabel: 'Calendar'
        }}
      />

      <Tab.Screen
        name={TOP_LEVEL_NAVIGATIONS.TASK}
        component={TaskStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarLabel: 'Task'
        }}
      />

      <Tab.Screen
        name={TOP_LEVEL_NAVIGATIONS.FOCUS}
        component={FocusStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarLabel: 'Focus'
        }}
      />

      <Tab.Screen
        name={TOP_LEVEL_NAVIGATIONS.PROFILE}
        component={ProfileStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarLabel: 'Profile'
        }}
      />

    </Tab.Navigator>
  );
}

export default React.memo(TabBar);

