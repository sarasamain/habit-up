/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, TextInput, SafeAreaView, Alert, Picker } from 'react-native';

const BASE_URL = 'http://192.168.8.104:3003';
const taskColors = [
  {colorCode: 'lavender', displayName: 'Lavender'},
  {colorCode: 'pink', displayName: 'Pink'},
  {colorCode: 'lightblue', displayName: 'Light Blue'},
  {colorCode: 'beige', displayName: 'Beige'},
];

const taskTypes = [
  {type: 'count', displayName: 'Count'},
  {type: 'time', displayName: 'Time'},
  {type: 'check', displayName: 'Check off'},
];

const unitTypes = [
  {unit: 'once', displayName: 'Once'},
  {unit: 'reps', displayName: 'Repetitions'},
  {unit: 'hours', displayName: 'Hours'},
  {unit: 'minutes', displayName: 'Minutes'},
  {unit: 'seconds', displayName: 'Seconds'},
];

const NewTaskModal = ({ navigation }) => {

  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskGoal, setTaskGoal] = useState('0');
  const [taskColor, setTaskColor] = useState('lavender');
  const [taskType, setTaskType] = useState('count');
  const [taskUnit, setTaskUnit] = useState('count');

  const handleSubmit = () => {
    const needsRefresh = true;
    const randomId = '' + (Math.round(Math.random() * 1000000));

    if (!taskName || !taskDescription || parseInt(taskGoal) === 0 ) {
      Alert.alert('All inputs must be filled');
    } else {
      const newTask = {
        taskId: randomId,
        taskName,
        description: taskDescription,
        goal: taskGoal,
        color: taskColor,
        type: taskType,
        currentStreak: 0,
        maxStreak: 0,
      };
      console.log('newTask', newTask);
      postTask(newTask)
        .then(() => {
          navigation.navigate('TodayTasks', { needsRefresh });
        });
    };
  };

  const postTask = async (body) => {
    return fetchData('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });
  };

  const fetchData = (path, options) => {
    return fetch(BASE_URL + path, options)
      .then(res => res.status < 400 ? res : Promise.reject(res))
      .then(res => res.status !== 204 ? res.json() : res)
      .catch(error => {
        console.log('error', error);
      });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Text style={styles.text}>Task Name</Text>
        <TextInput
          style={styles.input}
          value={taskName}
          onChangeText={setTaskName}
          placeholder="Ex. Workout"
        />
        <Text style={styles.text}>Why?</Text>
        <TextInput
          style={styles.input}
          value={taskDescription}
          multiline={true}
          numberOfLines={3}
          onChangeText={setTaskDescription}
          placeholder="Ex. To get fit for summer"
        />
        <Text style={styles.text}>Color</Text>
        <Picker
          style={styles.picker}
          selectedValue={taskColor}
          onValueChange={itemValue => 
            setTaskColor(itemValue)
          }>
            {taskColors.map(color => (
              <Picker.Item style={styles.pickerItem} label={color.displayName} value={color.colorCode} />
              ))}
        </Picker>
        <Text style={styles.text}>Type</Text>
        <Picker
          style={styles.picker}
          selectedValue={taskType}
          onValueChange={itemValue => 
            setTaskType(itemValue)
          }>
            {taskTypes.map(type => (
              <Picker.Item style={styles.pickerItem} label={type.displayName} value={type.type} />
              ))}
        </Picker>
        <Text style={styles.text}>Daily Goal</Text>
        <TextInput
          style={styles.input}
          value={taskGoal}
          // keyboardType="numeric"
          onChangeText={setTaskGoal}
          placeholder="Ex. 10"
        />
        <Picker
          style={styles.picker}
          selectedValue={taskUnit}
          onValueChange={itemValue => 
            setTaskUnit(itemValue)
          }>
            {unitTypes.map(unitType => (
              <Picker.Item style={styles.pickerItem} label={unitType.displayName} value={unitType.unit} />
              ))}
        </Picker>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.add} >Add </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  input: {
    borderWidth: 1,
    borderColor: 'lavender',
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  },
  add: {
    backgroundColor: 'purple',
    color: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  picker: {
    marginBottom: 20,
  },
  pickerItem: {
    backgroundColor: 'lavender',
  },
});

export default NewTaskModal;