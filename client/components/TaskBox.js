/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TaskCheckButtom from './TaskCheckButton';
import ApiClient from '../ApiClient';

const TaskBox = ({ task, needsRefreshCallback }) => {
  const id = task.taskId;
  const { status } = task;
  const boxColor = {
    backgroundColor: task.color,
  };

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

  const toggleTaskDone = async (e, id, status) => {
    status = status === 'false' ? 'true' : 'false';
    e.stopPropagation();
    await ApiClient.updateTaskStatus(id, status);
    needsRefreshCallback();
  };


  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.taskNameText}> {task.taskName} </Text>
      <Text style={styles.goalText}> Daily goal: {displayGoal()} </Text>
      <Text style={styles.descriptionText}> Why: {task.description} </Text>
      <TouchableOpacity onPress={(e) => toggleTaskDone(e , id, status)}>
        <TaskCheckButtom task={task}/>
      </TouchableOpacity>
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
