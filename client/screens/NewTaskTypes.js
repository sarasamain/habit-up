/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

const NewTaskTypes = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.welcomeText}> Pick a Task Type </Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => {
          navigation.navigate('NewTaskModal');
        }}>
          <View style={styles.goToTasks}>
            <Text style={styles.goToTasksText}> Count Task </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 50,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
  goToTasks: {
    borderRadius: 10,
    backgroundColor: 'purple',
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  goToTasksText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default NewTaskTypes;