import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const TaskCounter = ({ task, toggleTaskDoneCallback }) => {
  const id = task.taskId;
  let status = task.status;
  const borderColor = {
    borderColor: task.color,
  };
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
    if (count <= task.goal && count >= 0 && task.status === 'true') {
      toggleTaskDoneCallback(e, id, status);
      status = 'false';
    }
  };

  return (
    <View style={[styles.box, borderColor]}>
      <TouchableOpacity style={styles.button} onPress={(e) => decreaseCount(e)}>
        <View>
          <Text style={styles.text}> - </Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.text}> {count} </Text>
      <TouchableOpacity style={styles.button} onPress={(e) => increaseCount(e)}>
        <View>
          <Text style={styles.text}> + </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: 3,
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: 'slategrey',
    borderRadius: 30,
    height: 40,
    width: 40,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  text: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default TaskCounter;
