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

// const unitTypes = [
//   {unit: 'hours', displayName: 'Hours'},
//   {unit: 'minutes', displayName: 'Minutes'},
//   {unit: 'seconds', displayName: 'Seconds'},
// ];

const NewTaskForm = ({ navigation, route }) => {

  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskGoal, setTaskGoal] = useState('0');
  const [taskColor, setTaskColor] = useState('lavender');
  // const [taskUnit, setTaskUnit] = useState('count');

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
              value={taskGoal}
              keyboardType="numeric"
              onChangeText={setTaskGoal}
              placeholder="hours"
              />
            <Text> Minutes </Text>
            <TextInput
              style={styles.input}
              value={taskGoal}
              keyboardType="numeric"
              onChangeText={setTaskGoal}
              placeholder="minutes"
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
              placeholder="Ex. 10"
            />
          </View>
        </View>
      );
    };
  };

  const handleSubmit = () => {
    const needsRefresh = true;
    const randomId = uuidv4();

    if (!taskName || !taskDescription || parseInt(taskGoal) === 0 ) {
      Alert.alert('All inputs must be filled');
    } else {
      const newTask = {
        taskId: randomId,
        taskName,
        description: taskDescription,
        goal: taskGoal,
        color: taskColor,
        currentStreak: 0,
        maxStreak: 0,
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
        
        {/* <Picker
          style={styles.picker}
          selectedValue={taskUnit}
          onValueChange={itemValue => 
            setTaskUnit(itemValue)
          }>
            {unitTypes.map(unitType => (
              <Picker.Item style={styles.pickerItem} label={unitType.displayName} value={unitType.unit} />
              ))}
        </Picker> */}

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