/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const StopWatch = ({ task, toggleTaskDoneCallback }) => {

    const [time, setTime] = useState({
      hours: 0,
      mins: 0,
      secs: 0,
    });
    const [isRunning, setIsRunning] = useState(false);
    // const [intervalId, setIntervalId] = useState(null);
    // const [startTime, setStartTime] = useState(null);
    // let isRunning = false;
    // let intervalId;

    const timeGoal = {
      hours: task.hours,
      mins: task.minutes,
    };

    useEffect(() => {
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

        // Verify if goal has been reached
          if (time.hours >= timeGoal.hours && time.mins >= timeGoal.mins) {
            console.warn("Goal reached");
            Alert.alert('You have reached your goal for the day!')
          }

          console.log({time});
          // clearInterval(intervalId);
        }, 1000);
      } else {
        clearInterval(intervalId);
      }

      return () => clearInterval(intervalId);
    }, [time, isRunning]);

    const startStopwatch = () => {
        setIsRunning(true);
    };

    const pauseStopwatch = () => {
        setIsRunning(false);
    }

    const resetStopwatch = () => {
      pauseStopwatch();
      setTime({
        hours:0,
        mins:0,
        secs: 0
      });
    }

    return (
      <View style={styles.box}>
        <View style={styles.timerBox}>
          <Text>{`${time.hours} : ${time.mins} : ${time.secs}`} </Text>
          <Text style={styles.isRunning}>{isRunning ? 'Running' : 'Stopped'}</Text>
        </View>
        <View style={styles.timerBox}>
          <Text style={styles.button} onPress={() => startStopwatch()}>Start</Text>
          <Text style={styles.button} onPress={() => pauseStopwatch()}>Pause</Text>
          <Text style={styles.button} onPress={() => resetStopwatch()}>Reset</Text>
        </View>
      </View>
    );
  };



// const StopWatch = ({ task, toggleTaskDoneCallback }) => {

//   const [time, setTime] = useState({
//     hours: 0,
//     mins: 0,
//     secs: 0,
//   });
//   const [isRunning, setIsRunning] = useState(false);
//   const [intervalId, setIntervalId] = useState(null);
//   const [startTime, setStartTime] = useState(Date.now());
//   // let isRunning = false;
//   // let intervalId;

//   const timeGoal = {
//     hours: task.hours,
//     mins: task.minutes,
//   };

//   useEffect(() => {
//     console.log({startTime})
//   }, [startTime]);

//   const startStopwatch = () => {
//     if (isRunning) return;
//     else {
//       setIsRunning(true);
//       // setStartTime((_) => Date.now());
//       console.log({startTime})

//       setInterval(() => {
//         const runAt = Date.now();
//         const deltaMillisecs = runAt - startTime;
//         setStartTime(runAt);

//       console.log({startTime})
//       console.log({deltaMillisecs})
//         const deltaSecs = Math.floor(deltaMillisecs / 1000);
//       console.log({deltaSecs})

//         if (time.secs + deltaSecs <= 59) {
//           setTime((time) => ({...time, secs: time.secs + deltaSecs}));
//         } else {
//           const secondsExcedingMinute = time.secs + deltaSecs - 60;
//           console.log({secondsExcedingMinute});
//           setTime((time) => ({...time, secs: secondsExcedingMinute}));
//           // time.secs = secondsExcedingMinute;

//           if (time.mins < 59) {
//             setTime((time) => ({...time, mins: time.mins + 1}));

//             // time.mins += 1;
//           } else {
//             setTime((time) => ({...time, mins: 0, hours: time.hours + 1}));
//             // time.mins = 0;
//             // time.hours += 1;
//           }
//         }

//       // Verify if goal has been reached
//         if (time.hours >= timeGoal.hours && time.mins >= timeGoal.mins) {
//           console.warn("Goal reached");
//           Alert.alert('You have reached your goal for the day!')
//         }

//         console.log({time});
//       }, 1000);
//     };
//   }

//   const pauseStopwatch = () => {
//     if (!isRunning) return;
//     else {
//       isRunning = false;
//       if (intervalId) clearInterval(intervalId);
//     }
//   }

//   const resetStopwatch = () => {
//     time.hours, time.mins, time.secs = 0;
//     pauseStopwatch();
//   }

//   return (
//     <View style={styles.box}>
//       <View style={styles.timerBox}>
//         <Text> {time.hours} : {time.minutes} : {time.seconds} </Text>
//         <Text style={styles.isRunning}>{isRunning ? 'Running' : 'Stopped'}</Text>
//       </View>
//       <View style={styles.timerBox}>
//         <Text style={styles.button} onPress={() => startStopwatch()}>Start</Text>
//         <Text style={styles.button} onPress={() => pauseStopwatch()}>Pause</Text>
//         <Text style={styles.button} onPress={() => resetStopwatch()}>Reset</Text>
//       </View>
//     </View>
//   );
// };


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

