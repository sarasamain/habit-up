/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ApiClient from '../ApiClient';

const TaskDetails = ({ navigation, route }) => {
  const { task } = route.params;
  const id = task.taskId;

  const handleDeleteTask = (id) => {
    const needsRefresh = true;
    
    ApiClient.deleteTask(id)
      .then(() => {
        navigation.navigate('TodayTasks', { needsRefresh });
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.nameText}> Task Details: </Text>
        <Text style={styles.titleText}>Your Why: </Text>
        <Text style={styles.dataText}>{task.description}</Text>
        <Text style={styles.titleText}>Task Type: </Text>
        <Text style={styles.dataText}>{task.type}</Text>
        <Text style={styles.titleText}>Your Daily Goal: </Text>
        <Text style={styles.dataText}>{task.goal}</Text>
        <View style={styles.streakView}>
          <View>
            <Text style={styles.titleText}>Current Streak: </Text>
            <Text style={[styles.dataText]}>{task.currentStreak}</Text>
          </View>
          <View>
            <Text style={styles.titleText}>Maximum Streak: </Text>
            <Text style={[styles.dataText]}>{task.maxStreak}</Text>
          </View>
        </View>
      </View>
      <Text 
        style={styles.deleteText}
        onPress={() => handleDeleteTask(id)}
      > Delete </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dataText: {
    fontSize: 18,
    color: 'grey',
    marginBottom: 20,
  },
  deleteText: {
    color: 'purple',
    backgroundColor: 'whitesmoke',
    fontSize: 22,
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    borderWidth: 1,
  },
  streakView: {
    flexDirection: 'row',
  },
  streakBubble: {
    // marginRight: 20,
    borderWidth: 5,
    height: 50,
    width: 50,
    borderColor: 'lavender',
    borderRadius: 50,
  },
});

export default TaskDetails;