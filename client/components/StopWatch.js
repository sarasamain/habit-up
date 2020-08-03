import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// eslint-disable-next-line prettier/prettier
const StopWatch = ({ task, toggleTaskDoneCallback }) => {
  return (
    <View style={styles.box}>
      <Text>Stopwatch</Text>
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
});

export default StopWatch;