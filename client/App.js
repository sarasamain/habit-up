/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from './screens/Home';
import TodayTasks from './screens/TodayTasks';
import TaskDetails from './screens/TaskDetails';
import TaskTypes from './screens/TaskTypes';
import NewTaskTime from './screens/NewTaskTime';
import NewTaskCount from './screens/NewTaskCount';
import NewTaskCheck from './screens/NewTaskCheck';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TodayTasks"
          component={TodayTasks}
          options={{ title: "Today's Tasks"}}
        />
        <Stack.Screen
          name="TaskDetails"
          component={TaskDetails}
          options={({ route }) => ({ title: route.params.taskName})}
        />
        <Stack.Screen
          name="TaskTypes"
          component={TaskTypes}
          options={{ title: "Create a New Task"}}
        />
        <Stack.Screen
          name="NewTaskTime"
          component={NewTaskTime}
          options={{ title: "Time Task"}}

        />
        <Stack.Screen
          name="NewTaskCount"
          component={NewTaskCount}
          options={{ title: "Count Task"}}

        />
        <Stack.Screen
          name="NewTaskCheck"
          component={NewTaskCheck}
          options={{ title: "Check Off Task"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const RootStack = createStackNavigator();
// const MainStack = createStackNavigator();
// const FormStack = createStackNavigator();

// const MainStackScreen = () => {
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen
//         name="TodayTasks"
//         component={TodayTasks}
//         options={{ title: "Today's Tasks"}}
//       />
//       <MainStack.Screen
//         name="TaskDetails"
//         component={TaskDetails}
//         options={({ route }) => ({ title: route.params.taskName})}
//       />
//     </MainStack.Navigator>
//   );
// };

// const FormStackScreen = () => {
//   return (
//     <FormStack.Navigator>
//       <FormStack.Screen
//         name="NewTaskTypes"
//         component={NewTaskTypes}
//         options={{ title: "Create new task"}}
//       />
//       <FormStack.Screen
//         name="NewTaskModal"
//         component={NewTaskModal}
//       />
//     </FormStack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <RootStack.Navigator mode="modal">
//         <RootStack.Screen
//           name="Main"
//           component={MainStackScreen}
//           options={{ headerShown: false }}
//         />
//         <RootStack.Screen
//           name="Form"
//           component={FormStackScreen}
//           options={{ headerShown: false }}
//         />
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// };


export default App;