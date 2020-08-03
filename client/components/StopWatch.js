import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useStopwatch } from 'react-timer-hook';
import { setStatusBarBackgroundColor } from 'expo-status-bar';



const StopWatch = ({ task, toggleTaskDoneCallback }) => {
  const id = task.taskId;
  let status = task.status;

  let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

  let [secs, setSecs] = useState(0);
  // let [mins, setMins] = useState(0);
  // let [hours, setHours] = useState(0);
  let [start, setStart] = useState(false);

  // let start = false;
  let interval = null;

  const handleToggle = (e) => {
    e.stopPropagation(e);
    setStart(!start);
    handleStart();
  };

  const handleStart = () => {
    if (start) {
      setStart(!start);
      interval = setInterval(() => {
        if (secs !== 59) {
          setSecs(lastSecs => lastSecs + 1);
        // } else if (mins !== 59) {
        //   setSecs(0);
        //   setMins(lastMins => lastMins + 1);
        // } else if (hours !== 23) {
        //   setSecs(0);
        //   setMins(0);
        //   setHours(lastHours + 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
  };

  const handleReset = (e) => {
    e.stopPropagation();
    setSecs(0);
    setMins(0);
    setHours(0);
    setStart(!start);
    clearInterval(interval);
  };

  return (
    <View style={styles.box}>
      <Text style={styles.text}>{padToTwo(hours) + ' : '}</Text>
      <Text style={styles.text}>{padToTwo(mins) + ' : '}</Text>
      <Text style={styles.text}>{padToTwo(secs)}</Text>
      <TouchableOpacity onPress={(e) => handleToggle(e)}>
        <Text style={styles.button}>{!start ? 'Start' : 'Stop'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(e) => handleReset(e)}>
        <Text style={styles.button}>Reset</Text>
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
  },
  button: {
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 18,
  },
});

export default StopWatch;