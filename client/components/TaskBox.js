/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskBox = ({ task }) => {
  const boxColor = {
    backgroundColor: task.color,
  };
  console.log(task)
  // console.log(taskName, description, color, type, hours, minutes, goal);

  const displayGoal = () => {
    if (task.type === 'time') {
      return (
      <Text style={styles.goalText}> {task.hours} h {task.minutes} mins </Text>
      )
    } else if (task.type === 'count') {
      return (
        <Text style={styles.goalText}> {task.goal} </Text>
      );
    }
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.taskNameText}> {task.taskName} </Text>
      <Text style={styles.goalText}> Daily goal: {displayGoal()} </Text>
      <Text style={styles.descriptionText}> Why: {task.description} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskNameText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  goalText: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 14,
  },
  descriptionText: {
    color: 'grey',
    fontSize: 10,
  },
  box: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 30,
  },
});

export default TaskBox;
