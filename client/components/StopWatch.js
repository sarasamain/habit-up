import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useTimer, useStopwatch } from 'react-timer-hook';

const StopWatch = ({ task, toggleTaskDoneCallback, expiryTimestamp }) => {

//   const [isStart, setIsStart] = useState(false);
//   const [remainingHours, setRemainingHours] = useState(parseInt(task.hours));
//   const [remainingMinutes, setRemainingMinutes] = useState(parseInt(task.minutes));
//   const [remainingSeconds, setRemainingSeconds] = useState(0);

//   const time = new Date();
//   time.setSeconds(time.getSeconds() + remainingHours * 3600 + remainingMinutes * 60 + 1);
//   expiryTimestamp = time;

//   let {
//     seconds,
//     minutes,
//     hours,
//     isRunning,
//     days,
//     start,
//     pause,
//     resume,
//     restart,
//   } = useTimer({ expiryTimestamp, onExpire: () => {
//       Alert.alert('You just finished the task!');
//       console.warn('onExpire called');
//       //send info to parent to set task as done
//     }
//   });

//   const handleStart = () => {
//     setIsStart(!isStart);
//     resume();
//   };

//   useEffect(pause, [pause]);
  
//   return (
//     <View style={styles.box}>
//       <View style={styles.timerBox}>
//         <Text> {hours} : {minutes} : {seconds} </Text>
//         <Text style={styles.isRunning}>{isRunning ? 'Running' : 'Stopped'}</Text>
//       </View>
//       <View style={styles.timerBox}>
//         {/* <Text style={styles.button} onPress={() => handleStart()}>Start</Text> */}
//         <Text style={styles.button} onPress={resume}>Start</Text>
//         <Text style={styles.button} onPress={pause}>Pause</Text>
//         {/* <Text style={styles.button} onPress={resume}>Resume</Text> */}
//         {/* <Text style={styles.button} onPress={() => {
//           const time = new Date();
//           time.setSeconds(time.getSeconds() + 300);
//             restart(time);
//           }}
//         > Restart</Text> */}
//       </View>
//     </View>
//   );
// };
  
  
    const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });
 
  return (
    <View style={styles.box}>
      <View style={styles.timerBox}>
        <Text> {hours} : {minutes} : {seconds} </Text>
        <Text style={styles.isRunning}>{isRunning ? 'Running' : 'Stopped'}</Text>
      </View>
      <View style={styles.timerBox}>
        <Text style={styles.button} onPress={start}>Start</Text>
        <Text style={styles.button} onPress={pause}>Pause</Text>
        <Text style={styles.button} onPress={reset}>Reset</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timerBox: {
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
  isRunning: {
    marginLeft: 10,
  }
});

export default StopWatch;

// const StopWatch = ({ task, toggleTaskDoneCallback }) => {
//   const id = task.taskId;
//   let status = task.status;

//   let padToTwo = (number) => (number <= 9 ? `0${number}`: number);

//   let [secs, setSecs] = useState(0);
//   // let [mins, setMins] = useState(0);
//   // let [hours, setHours] = useState(0);
//   let [start, setStart] = useState(false);

//   // let start = false;
//   let interval = null;

//   const handleToggle = (e) => {
//     e.stopPropagation(e);
//     setStart(!start);
//     handleStart();
//   };

//   const handleStart = () => {
//     if (start) {
//       setStart(!start);
//       interval = setInterval(() => {
//         if (secs !== 59) {
//           setSecs(lastSecs => lastSecs + 1);
//         // } else if (mins !== 59) {
//         //   setSecs(0);
//         //   setMins(lastMins => lastMins + 1);
//         // } else if (hours !== 23) {
//         //   setSecs(0);
//         //   setMins(0);
//         //   setHours(lastHours + 1);
//         }
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }
//   };

//   const handleReset = (e) => {
//     e.stopPropagation();
//     setSecs(0);
//     setMins(0);
//     setHours(0);
//     setStart(!start);
//     clearInterval(interval);
//   };

//   return (
//     <View style={styles.box}>
//       <Text style={styles.text}>{padToTwo(hours) + ' : '}</Text>
//       <Text style={styles.text}>{padToTwo(mins) + ' : '}</Text>
//       <Text style={styles.text}>{padToTwo(secs)}</Text>
//       <TouchableOpacity onPress={(e) => handleToggle(e)}>
//         <Text style={styles.button}>{!start ? 'Start' : 'Stop'}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={(e) => handleReset(e)}>
//         <Text style={styles.button}>Reset</Text>
//       </TouchableOpacity>
//     </View>
//  );
// };