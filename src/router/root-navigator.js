import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import HomeScreen from '../screens/home-screen';
import SCREENS from '../utils/routes';
import AddTaskScreen from '../screens/add-task-screen';
import TaskDetails from '../screens/task-details-screen';

function RootNavigator() {
  const Stack = createNativeStackNavigator();
  const {home, addTask, taskDetails} = SCREENS;

  return (
    <Stack.Navigator>
      <Stack.Screen name={home} component={HomeScreen} />
      <Stack.Screen
        options={{headerShown: false}}
        name={addTask}
        component={AddTaskScreen}
      />
      <Stack.Screen name={taskDetails} component={TaskDetails} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
