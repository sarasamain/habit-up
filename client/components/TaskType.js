import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// eslint-disable-next-line prettier/prettier
const TaskType = ({ description, type }) => {
  return (
    <View style={styles.typeBox}>
      <Text style={styles.typeText}> {type} </Text>
      <Text style={styles.descriptionText}> {description} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  typeBox:{
    backgroundColor: 'purple',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  typeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: 'white',
  },
  descriptionText: {
    color: 'white',
  },
});

export default TaskType;