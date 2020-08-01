/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import ApiClient from '../ApiClient';

const TaskDetails = ({ navigation, route }) => {
  const { task } = route.params;
  const id = task.taskId;
  const taskColorBackground = {
    backgroundColor: task.color,
  }

  const creationDate = () => {
    const date = new Date(task.creationDate);
    const year = date.getFullYear().toString();
    const month = date.getMonth().toString();
    const day = date.getDate().toString();
    return `${day} / ${month} / ${year}`;
  };

  const confirmDelete = (id) => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [{
        text: 'Cancel',
        onPress: () => console.log('This task will be kept'),
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => {
          console.log('This task will be deleted');
          handleDeleteTask(id);
        },
      }],
      { cancelable: false }
    );
  };

  const handleDeleteTask = (id) => {
    const needsRefresh = true;

    ApiClient.deleteTask(id)
      .then(() => {
        navigation.navigate('TodayTasks', { needsRefresh });
      });
  };

  return (
    <SafeAreaView style={[styles.safeArea, {borderColor: task.color}]}>
      <View>
        <View style={[styles.boxTitle]}>
          <Text style={[styles.nameText, taskColorBackground]}> {task.taskName}: </Text>
        </View>
        <Text style={styles.titleText}>Your Why: </Text>
        <Text style={styles.dataText}>{task.description}</Text>
        <Text style={styles.titleText}>Creation Date: </Text>
        <Text style={styles.dataText}>{creationDate()}</Text>
        <Text style={styles.titleText}>Task Type: </Text>
        <Text style={[styles.dataText, styles.capitalize]}>{task.type}</Text>
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
        onPress={() => confirmDelete(id)}
      > Delete </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 20,
  },
  boxTitle: {
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 20,
  },
  dataText: {
    fontSize: 18,
    color: 'grey',
    marginBottom: 20,
    marginLeft: 20,
  },
  deleteText: {
    color: 'white',
    backgroundColor: 'purple',
    fontSize: 20,
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: 20,
    borderWidth: 3,
    borderRadius: 5,
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