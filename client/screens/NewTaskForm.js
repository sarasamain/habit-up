/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput, SafeAreaView, Alert, Picker } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import ApiClient from '../ApiClient';

const taskColors = [
  {colorCode: 'lavender', displayName: 'Lavender'},
  {colorCode: 'pink', displayName: 'Pink'},
  {colorCode: 'lightblue', displayName: 'Light Blue'},
  {colorCode: 'beige', displayName: 'Beige'},
];

const NewTaskForm = ({ navigation, route }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskColor, setTaskColor] = useState('lavender');
  const [taskGoal, setTaskGoal] = useState('0');
  const [taskHours, setTaskHours] = useState('0');
  const [taskMinutes, setTaskMinutes] = useState('0');
  const { type } = route.params;

  const displayType = () => {
    if (type === 'time') {
      return (
        <View>
          <Text style={styles.text}>Daily Goal</Text>
          <View style={styles.timeInput}>
            <Text> Hours </Text>
            <TextInput
              style={styles.input}
              value={taskHours}
              keyboardType="numeric"
              onChangeText={setTaskHours}
              />
            <Text> Minutes </Text>
            <TextInput
              style={styles.input}
              value={taskMinutes}
              keyboardType="numeric"
              onChangeText={setTaskMinutes}
            />
          </View>
        </View>
      );
    } else if (type === 'count') {
      return (
        <View>
          <Text style={styles.text}>Daily Goal</Text>
          <View style={styles.countInput}>
            <TextInput
              style={styles.input}
              value={taskGoal}
              keyboardType="numeric"
              onChangeText={setTaskGoal}
            />
          </View>
        </View>
      );
    };
  };

  const handleSubmit = () => {
    const needsRefresh = true;
    const randomId = uuidv4();

    if (!taskName || !taskDescription ) {
      Alert.alert('All inputs must be filled');
    } else {
      const newTask = {
        taskId: randomId,
        taskName,
        description: taskDescription,
        color: taskColor,
        type,
        goal: taskGoal,
        hours: taskHours,
        minutes: taskMinutes,
        creationDate: Date.now(),
        done: false,
        currentStreak: 0,
        maxStreak: 0,
        history: [],
      };
      ApiClient.postTask(newTask)
        .then(() => {
          navigation.navigate('TodayTasks', { needsRefresh });
        });
    };
  };

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
        <View >
          {displayType()}
        </View>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.add} >Add Task </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 30,
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
    marginTop: 30,
    marginHorizontal: 80,
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
  timeInput: {
    flexDirection: 'column',
  },
  countInput: {

  },
});

export default NewTaskForm;