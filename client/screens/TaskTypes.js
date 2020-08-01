/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import TaskType from '../components/TaskType';

const taskTypes = [
  {label:'time', description: 'Track time for your goals'},
  {label:'count', description: 'For activities you do multiple times'},
  {label:'check', description: 'For activities you do once'},
];

const TaskTypes = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <FlatList
          style={styles.container}
          data={taskTypes}
          keyExtractor={(item) => item.label}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => {
              navigation.navigate('NewTaskForm', {
                type: item.label,
              });
            }}>
              <TaskType type={item.label} description={item.description}> </TaskType>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 50,
    backgroundColor: 'white',
  },
});

export default TaskTypes;