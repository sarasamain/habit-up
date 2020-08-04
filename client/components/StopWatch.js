/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';


const StopWatch = ({ task, toggleTaskDoneCallback }) => {
    const id = task.taskId;
    const [status, setStatus] = useState(task.status);
    const [time, setTime] = useState({
      hours: 0,
      mins: 0,
      secs: 0,
    });
    const [isRunning, setIsRunning] = useState(false);
    const timeGoal = {
      hours: task.hours,
      mins: task.minutes,
    };

    const borderColor = {
      borderColor: task.color,
    };

    let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

    useEffect((e) => {
      let intervalId;

      if (isRunning) {
        const startTime = Date.now();
        intervalId = setInterval(() => {
          const runAt = Date.now();
          const deltaMillisecs = runAt - startTime;
          const deltaSecs = Math.round(deltaMillisecs / 1000);

          if (time.secs + deltaSecs <= 59) {
            setTime({...time, secs: time.secs + deltaSecs});
          } else {
            const secondsExcedingMinute = time.secs + deltaSecs - 60;
            console.log({secondsExcedingMinute});

            if (time.mins < 59) {
              setTime(({...time, secs: secondsExcedingMinute, mins: time.mins + 1}));
            } else {
              setTime(({...time, hours: time.hours + 1, mins: 0, secondsExcedingMinute}));
            }
          }
          if (time.hours >= timeGoal.hours && time.mins >= timeGoal.mins && task.status === 'false') {
            Alert.alert('You have reached your goal for the day!');
            toggleTaskDoneCallback(e, id, status);
            setStatus('true');
            setIsRunning(false);
          }
        }, 1000);
      } else {
        clearInterval(intervalId);
      }

      return () => clearInterval(intervalId);
    }, [time, isRunning]);

    const startStopwatch = (e) => {
        e.stopPropagation();
        setIsRunning(true);
    };

    const pauseStopwatch = (e) => {
        e.stopPropagation();
        setIsRunning(false);
    }

    const resetStopwatch = (e) => {
      pauseStopwatch(e);
      Alert.alert(
        'Reset Stopwatch',
        'Are you sure you want to reset the stopwatch for this task?',
        [{
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setTime({
              hours:0,
              mins:0,
              secs: 0,
            });
          },
        }],
        { cancelable: false }
      );
    };

    return (
      <View style={[styles.box, borderColor]}>
        <View style={styles.timerBox}>
          <Text>{`${padToTwo(time.hours)} : ${padToTwo(time.mins)} : ${padToTwo(time.secs)}`} </Text>
          <Text style={styles.isRunning}>{isRunning ? 'Running' : 'Stopped'}</Text>
        </View>
        <View style={styles.timerBox}>
          {isRunning ? 
            <TouchableOpacity onPress={(e) => pauseStopwatch(e)}>
              <Image source={require('../assets/pause.png')} style={styles.imageButton} />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={(e) => startStopwatch(e)}>
              <Image source={require('../assets/play.png')} style={styles.imageButton} />
            </TouchableOpacity>
          }
          <TouchableOpacity onPress={(e) => resetStopwatch(e)}>
            <Image source={require('../assets/reset.png')} style={styles.imageButton} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  timerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderWidth: 1,
    borderColor: 'slategrey',
    borderRadius: 5,
    paddingVertical: 1,
    paddingHorizontal: 5,
    marginHorizontal: 2,
  },
  text: {
    fontSize: 18,
  },
  isRunning: {
    marginLeft: 10,
    color: 'slategrey',
  },
  imageButton: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  box: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 2,
    margin: 2,
    borderWidth: 1,
  },
});

export default StopWatch;

