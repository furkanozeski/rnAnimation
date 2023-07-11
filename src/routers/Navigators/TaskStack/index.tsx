import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routers, { TaskNavigationParam } from '@src/routers/Routes';
import AddTask from '@src/screens/AddTask';

const Stack = createNativeStackNavigator<TaskNavigationParam>();

function TaskStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Routers.AddTask}
        component={AddTask}
      />

    </Stack.Navigator>
  );
}

export default React.memo(TaskStack);
