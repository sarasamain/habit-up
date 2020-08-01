/* eslint-disable prettier/prettier */

import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import TaskBox from '../components/TaskBox';
import ApiClient from '../ApiClient';

const TodayTasks = ({ navigation, route }) => {
  const [tasks, setTasks] = useState([]);
  const needsRefresh = route.params ? route.params.needsRefresh : null;

  const refreshTasks = async () => {
    const allTasks = await ApiClient.getAllTasks();
    setTasks(allTasks);
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  useEffect(() => {
    console.log('Params changed', route.params);
    if (needsRefresh) {
      refreshTasks();
    }
  }, [route.params]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.welcomeText}> Welcome back ! </Text>
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
            navigation.navigate('TaskTypes');
          }}>
            <Text style={styles.newTaskText}>+ Add Task </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
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
