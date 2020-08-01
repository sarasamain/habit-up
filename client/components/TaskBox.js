import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// eslint-disable-next-line prettier/prettier
const TaskBox = ({ taskName, description, color, goal }) => {
  const boxColor = {
    backgroundColor: color,
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.taskNameText}> {taskName} </Text>
      <Text style={styles.goalText}> Daily goal: {goal} </Text>
      <Text style={styles.descriptionText}> Why: {description} </Text>
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
