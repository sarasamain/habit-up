/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  Alert,
  Picker,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import ApiClient from '../ApiClient';

const taskColors = [
  { colorCode: '#f9c74f', displayName: 'Yellow' },
  { colorCode: '#90be6d', displayName: 'Green' },
  { colorCode: 'pink', displayName: 'Pink' },
  { colorCode: '#4ECDC4', displayName: 'Light Blue' },
  { colorCode: '#FF6B6B', displayName: 'Light Red' },
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
    }
  };

  const handleSubmit = () => {
    const needsRefresh = true;
    const randomId = uuidv4();

    if (!taskName || !taskDescription) {
      Alert.alert('All text inputs must be filled');
    }
    if (
      parseInt(taskHours) < 0 ||
      parseInt(taskMinutes) < 0 ||
      parseInt(taskGoal) < 0
    ) {
      Alert.alert('Please enter valid numbers');
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
        status: false,
        currentStreak: 0,
        maxStreak: 0,
        history: {},
      };
      ApiClient.postTask(newTask).then(() => {
        navigation.navigate('TodayTasks', { needsRefresh });
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView styles={styles.scrollView}>
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
          style={[styles.picker, { backgroundColor: taskColor }]}
          selectedValue={taskColor}
          onValueChange={(itemValue) => setTaskColor(itemValue)}
        >
          {taskColors.map((color) => (
            <Picker.Item
              style={styles.pickerItem}
              key={color.colorCode}
              label={color.displayName}
              value={color.colorCode}
            />
          ))}
        </Picker>
        <View>{displayType()}</View>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.actionBox}>
            <Text style={styles.add}> Add Task </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'ivory',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 30,
  },
  scrollView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  input: {
    borderWidth: 1,
    borderColor: 'slategrey',
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  add: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  picker: {
    marginBottom: 20,
    borderColor: 'slategrey',
    borderRadius: 5,
  },
  pickerItem: {
    backgroundColor: 'lavender',
  },
  timeInput: {
    flexDirection: 'column',
  },
  actionBox: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#1A535C',
    marginVertical: 20,
    marginHorizontal: 10,
    width: 150,
    height: 50,
    borderRadius: 10,
  },
  imageButton: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginLeft: 5,
  },
});

export default NewTaskForm;
