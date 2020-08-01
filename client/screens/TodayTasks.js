/* eslint-disable prettier/prettier */

import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import TaskBox from '../components/TaskBox';

const BASE_URL = 'http://192.168.8.104:3003';

const TodayTasks = ({ navigation, route }) => {
  const [tasks, setTasks] = useState([]);
  const needsRefresh = route.params ? route.params.needsRefresh : null;
  
  const handleFetchTasks = async () => {
    try {
      const result = await fetch(BASE_URL + '/tasks');
      console.log('result', result);
      const dbtasks = await result.json();
      setTasks(dbtasks);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    handleFetchTasks();
  }, []);

  useEffect(() => {
    console.log('Params changed', route.params);
    if (needsRefresh) {
      handleFetchTasks();
    }
  }, [route.params]);


  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <ScrollView> */}
        <FlatList
          // numColumns={2}
          style={styles.container}
          data={tasks}
          keyExtractor={(item) => item.taskId}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              navigation.navigate('TaskDetails', {
                taskName: item.taskName,
                task: item,
              });
            }}>
              <TaskBox taskName={item.taskName} description={item.description} color={item.color} currentStreak={item.currentStreak} maxStreak={item.maxStreak} type={item.type} goal={item.goal} />
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text>Add a New Task to get started!</Text>}
        />
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('NewTaskModal');
          }}>
            <Text style={styles.newTaskText}>+ Add Task </Text>
          </TouchableOpacity>
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  safeArea: {
    paddingBottom: 80,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  newTaskText: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'purple',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

export default TodayTasks;
