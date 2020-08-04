/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import TaskBox from '../components/TaskBox';
import ApiClient from '../ApiClient';

const TodayTasks = ({ navigation, route }) => {
  const [tasks, setTasks] = useState([]);
  const needsRefresh = route.params ? route.params.needsRefresh : null;

  const refreshTasks = async () => {
    const allTasks = await ApiClient.getAllTasks();
    setTasks([...allTasks]);
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  useEffect(() => {
    if (needsRefresh) {
      refreshTasks();
    }
  }, [route.params]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        numColumns={2}
        style={styles.container}
        data={tasks}
        keyExtractor={(item) => item.taskId}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            navigation.navigate('TaskDetails', {
              task: item,
            });
          }}>
            <TaskBox task={item} needsRefreshCallback={refreshTasks}/>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View>
            <Text style={styles.emptyList}>Add a New Task to get started with Habitator, the best habit tracker out there ! </Text>
          </View>}
      />
      <View style={styles.footer}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/settingsgear.png')} style={styles.imageButton} />
          <Image source={require('../assets/graphpresentation.png')} style={styles.imageButton} />
        </View>
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
  safeArea: {
    flex: 1,
    paddingBottom: 80,
    backgroundColor: 'ivory',
    alignItems: 'center',
  },
  emptyList: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'slategrey',
    paddingHorizontal: 40,
    paddingVertical: 200,
  },
  footer: {
    flex: 2,
    flexDirection: 'row',
    position: 'absolute',
    paddingHorizontal: 10,
    bottom: 0,
    width: 400,
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  newTaskText: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#1A535C',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  imageButton: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
});

export default TodayTasks;
