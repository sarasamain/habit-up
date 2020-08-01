/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// { taskId:'task003', taskName: '5 a day', description: 'Healthy and balanced diet!', color: 'pink', currentSreak: 1, maxStreak: 5, type: 'count', goal: 5},
// { taskId:'task004', taskName: 'Solo Project', description: 'I need a joooob', color: 'lavender', currentSreak: 1, maxStreak: 5, type: 'time', goal: 36000},

const TaskDetails = ({ route }) => {
  const { taskName, task } = route.params;

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