/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskCheckButton = ({ task }) => {
  const { status } = task;

  const handleCheck = () => {
    if (status === 'false') {
      return (
        <Text>Mark as done</Text>
      )
    } else if (status === 'true') {
      return (
        <Text>Mark as undone</Text>
      )
    }
  };

  return (
    <View>
      <Text style={styles.checkButton}> {handleCheck()} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkButton: {
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    padding: 3,
    alignSelf: 'center',
  },
});

export default TaskCheckButton;
