/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from './screens/Home';
import TodayTasks from './screens/TodayTasks';
import NewTaskModal from './screens/NewTaskModal';
import TaskDetails from './screens/TaskDetails';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="TodayTasks"
        component={TodayTasks}
        options={{ title: "Today's Tasks"}}
      />
      <MainStack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={({ route }) => ({ title: route.params.taskName})}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="NewTaskModal"
          component={NewTaskModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};


export default App;