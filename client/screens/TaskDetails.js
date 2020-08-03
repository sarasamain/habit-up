/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert } from 'react-native';
import ApiClient from '../ApiClient';
import TaskCalendar from '../components/TaskCalendar';

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

  const handleEditTask = (id) => {
    const needsRefresh = true;

    // ApiClient.deleteTask(id)
    //   .then(() => {
    //     navigation.navigate('Edit Form', { needsRefresh });
    //   });
  };

  return (
    <SafeAreaView style={[styles.safeArea, {borderColor: task.color}]}>
      <View style={[styles.boxTitle]}>
          <Text style={[styles.nameText, taskColorBackground]}> {task.taskName}: </Text>
        </View>
      <ScrollView style={styles.scrollView}>
      <View>
        <Text style={styles.titleText}>Your Why: </Text>
        <Text style={styles.dataText}>{task.description}</Text>
        <Text style={styles.titleText}>Creation Date: </Text>
        <Text style={styles.dataText}>{creationDate()}</Text>
        <Text style={styles.titleText}>Task Type: </Text>
        <Text style={[styles.dataText, styles.capitalize]}>{task.type}</Text>
        <Text style={styles.titleText}>Your Daily Goal: </Text>
        <Text style={styles.dataText}>{task.goal}</Text>
        <Text style={[styles.sectionText, taskColorBackground]}>Streaks</Text>
        <View style={styles.streakView}>
          <View>
            <Text style={[styles.titleText, {marginRight: 50}]}>Current: </Text>
            <Text style={[styles.dataText]}>{task.currentStreak}</Text>
          </View>
          <View>
            <Text style={styles.titleText}>Maximum: </Text>
            <Text style={[styles.dataText]}>{task.maxStreak}</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.sectionText, taskColorBackground]}>Calendar: </Text>
      <TaskCalendar task={task} />
      <View style={styles.actions}>
        <Text
          style={styles.deleteText}
          onPress={() => confirmDelete(id)}
        > Delete </Text>
        <Text
          style={styles.deleteText}
          onPress={() => handleEditTask(id)}
        > Edit </Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft: 20,
    paddingVertical: 10,
  },
  boxTitle: {
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingLeft: 20,
  },
  dataText: {
    fontSize: 18,
    color: 'grey',
    marginBottom: 20,
    paddingLeft: 20,
  },
  sectionText: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft: 20,
    paddingVertical: 5,
    alignSelf: 'stretch',
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
    alignSelf: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: 20,
    borderWidth: 10,
    borderRadius: 20,
  },
  scrollView: {
    flex: 2,
    alignSelf: 'stretch',
    paddingHorizontal: 10,
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
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default TaskDetails;