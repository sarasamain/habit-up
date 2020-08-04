/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import TodayTasks from './screens/TodayTasks';
import TaskDetails from './screens/TaskDetails';
import TaskTypes from './screens/TaskTypes';
import NewTaskForm from './screens/NewTaskForm';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Home}
          options={{title: null}}
        />
        <Stack.Screen
          name="TodayTasks"
          component={TodayTasks}
          options={{ title: null}}
        />
        <Stack.Screen
          name="TaskDetails"
          component={TaskDetails}
          options={({ route }) => ({ title: route.params.taskName})}
        />
        <Stack.Screen
          name="TaskTypes"
          component={TaskTypes}
          options={{ title: 'Create a New Task'}}
        />
        <Stack.Screen
          name="NewTaskForm"
          component={NewTaskForm}
          options={{ title: 'Time Task'}}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
