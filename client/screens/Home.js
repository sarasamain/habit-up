/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome back to the best habit tracker in the world !! </Text>
        <Text style={styles.welcomeText}>Are you ready for this ??</Text>
      </View>
      <View style={styles.goToTasks}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('TodayTasks');
        }}>
          <View style={styles.goToTasks}>
            <Text style={styles.goToTasksText}> Yassss! </Text>
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
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 20,
  },
  welcomeContainer: {
    margin: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
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

export default Home;