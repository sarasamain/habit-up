import React from 'react';
import { Image, StyleSheet } from 'react-native';

const TaskCheckButton = ({ task }) => {
  const { status } = task;

  const handleCheck = () => {
    if (status === false) {
      return (
        <Image
          source={require('../assets/untick.png')}
          style={styles.imageButton}
        />
      );
    } else {
      return (
        <Image
          source={require('../assets/tick.png')}
          style={styles.imageButton}
        />
      );
    }
  };

  return handleCheck();
};

const styles = StyleSheet.create({
  checkButton: {
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 3,
  },
  imageButton: {
    alignSelf: 'center',
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});

export default TaskCheckButton;
