/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TaskCheckButtom from './TaskCheckButton';
import TaskCounter from './TaskCounter';
import StopWatch from './StopWatch';
import ApiClient from '../ApiClient';

const TaskBox = ({ task, needsRefreshCallback }) => {
  const id = task.taskId;
  const { status } = task;
  const boxColor = {
    backgroundColor: task.color,
  };
  const boxColorBorder = {
    borderColor: task.color,
    borderWidth: 3,
  };

  const displayGoal = () => {
    if (task.type === 'time') {
      return (
        <View>
          <Text style={styles.goalText}> <Text style={{ fontWeight: 'bold' }}>Goal:</Text> {task.hours} h {task.minutes} mins </Text>
          <StopWatch task={task} toggleTaskDoneCallback={toggleTaskDone}/>
        </View>
      );
    } else if (task.type === 'count') {
      return (
        <View>
          <Text style={styles.goalText}> <Text style={{ fontWeight: 'bold' }}>Goal:</Text> {task.goal} </Text>
          <TaskCounter task={task} toggleTaskDoneCallback={toggleTaskDone} />
        </View>
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
    <View style={[styles.box, boxColorBorder]}>
      <View style={[styles.task, boxColor]}>
        <Text style={styles.taskNameText}> {task.taskName} </Text>
      </View>
      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}> <Text style={{ fontWeight: 'bold' }}>Why: </Text> {task.description} </Text>
      </View>
      {displayGoal()}
      <TouchableOpacity onPress={(e) => toggleTaskDone(e, id, status)}>
        <TaskCheckButtom task={task} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskNameText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  task: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingVertical: 5,
  },
  goalText: {
    color: 'grey',
    fontSize: 16,
    alignSelf: 'center',
  },
  descriptionText: {
    color: 'grey',
    fontSize: 12,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  descriptionBox: {
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  box: {
    borderRadius: 5,
    justifyContent: 'space-between',
    margin: 10,
    paddingBottom: 10,
    width: 180,
    height: 180,
  },
});

export default TaskBox;
