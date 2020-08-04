import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TaskType = ({ description, type }) => {
  const handleIcon = () => {
    if (type === 'time') {
      return (
        <Image
          source={require('../assets/hourglass.png')}
          style={styles.imageButton}
        />
      );
    } else if (type === 'count') {
      return <Text style={styles.plusOne}> +1 </Text>;
    } else if (type === 'check') {
      return (
        <Image
          source={require('../assets/greentick.png')}
          style={styles.imageButton}
        />
      );
    }
  };

  return (
    <View style={styles.typeBox}>
      <View style={styles.iconBackground}>{handleIcon()}</View>
      <View>
        <Text style={styles.typeText}> {type} </Text>
        <Text style={styles.descriptionText}> {description} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  typeBox: {
    flexDirection: 'row',
    backgroundColor: '#1A535C',
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
  plusOne: {
    color: 'slategrey',
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  descriptionText: {
    color: 'white',
  },
  imageButton: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  iconBackground: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'ivory',
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default TaskType;
