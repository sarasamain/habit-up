import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// eslint-disable-next-line prettier/prettier
const TaskCounter = ({ task, toggleTaskDoneCallback }) => {
  const id = task.taskId;
  let status = task.status;
  const [count, setCount] = useState(0);

  const increaseCount = (e) => {
    e.stopPropagation();
    setCount((currentValue) => currentValue + 1);
    if (count === task.goal - 1 && task.status === 'false') {
      Alert.alert('You have reached your goal for the day!');
      toggleTaskDoneCallback(e, id, status);
      status = 'true';
    }
  };

  const decreaseCount = (e) => {
    e.stopPropagation();
    setCount((currentValue) => currentValue - 1);
    if (count <= task.goal && task.status === 'true') {
      toggleTaskDoneCallback(e, id, status);
      status = 'false';
    }
  };

  return (
    <View style={styles.box}>
      <TouchableOpacity style={styles.button} onPress={(e) => decreaseCount(e)}>
        <View>
          <Text> - </Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.text}> {count} </Text>
      <TouchableOpacity style={styles.button} onPress={(e) => increaseCount(e)}>
        <View>
          <Text> + </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    padding: 5,
    margin: 3,
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
});

export default TaskCounter;