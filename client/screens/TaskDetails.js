import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import ApiClient from '../ApiClient';
import TaskCalendar from '../components/TaskCalendar';

const TaskDetails = ({ navigation, route }) => {
  const { task } = route.params;
  const id = task.taskId;
  const taskColorBackground = {
    backgroundColor: task.color,
  };

  const creationDate = () => {
    const date = new Date(task.creationDate);
    const year = date.getFullYear().toString();
    const month = date.getMonth().toString();
    const day = date.getDate().toString();
    return `${day} / ${month} / ${year}`;
  };

  const confirmDelete = (id) => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {
            handleDeleteTask(id);
          },
        },
      ],
      { cancelable: false },
    );
  };

  const handleDeleteTask = (idToDelete) => {
    const needsRefresh = true;

    ApiClient.deleteTask(idToDelete).then(() => {
      navigation.navigate('TodayTasks', { needsRefresh });
    });
  };

  const handleEditTask = (id) => {
    const needsRefresh = true;
  };

  return (
    <SafeAreaView style={[styles.safeArea, { borderColor: task.color }]}>
      <View style={[styles.boxTitle]}>
        <Text style={[styles.nameText, taskColorBackground]}>
          {' '}
          {task.taskName}:{' '}
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.titleText}>Your Why: </Text>
          <Text style={styles.dataText}>{task.description}</Text>
          <Text style={styles.titleText}>Creation Date: </Text>
          <Text style={styles.dataText}>{creationDate()}</Text>
          <Text style={styles.titleText}>Task Type: </Text>
          <Text style={[styles.dataText, styles.capitalize]}>{task.type}</Text>
          <Text style={styles.titleText}>Your Daily Goal: </Text>
          <Text style={styles.dataText}>{task.goal}</Text>
          <View
            style={[styles.sectionBox, styles.streakView, taskColorBackground]}
          >
            <Text style={styles.sectionText}>Streaks </Text>
            <Image
              source={require('../assets/streak.png')}
              style={styles.imageButton}
            />
          </View>
          <View style={styles.streakView}>
            <View>
              <Text style={[styles.titleText, { marginRight: 50 }]}>
                Current:{' '}
              </Text>
              <Text style={[styles.dataText]}>{task.currentStreak}</Text>
            </View>
            <View>
              <Text style={styles.titleText}>Maximum: </Text>
              <Text style={[styles.dataText]}>{task.maxStreak}</Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.sectionBox, styles.streakView, taskColorBackground]}
        >
          <Text style={styles.sectionText}>Calendar </Text>
          <Image
            source={require('../assets/calendarcolor.png')}
            style={styles.imageButton}
          />
        </View>
        <TaskCalendar task={task} />
        <View style={styles.actions}>
          <View style={styles.actionBox}>
            <Text style={styles.deleteText} onPress={() => confirmDelete(id)}>
              {' '}
              Delete{' '}
            </Text>
            <Image
              source={require('../assets/deletewhite.png')}
              style={styles.imageButton}
            />
          </View>
          <View style={styles.actionBox}>
            <Text style={styles.deleteText} onPress={() => handleEditTask(id)}>
              {' '}
              Edit{' '}
            </Text>
            <Image
              source={require('../assets/editwhite.png')}
              style={styles.imageButton}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft: 20,
    paddingVertical: 10,
  },
  boxTitle: {
    alignSelf: 'stretch',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingLeft: 20,
  },
  dataText: {
    fontSize: 18,
    color: 'grey',
    marginBottom: 20,
    paddingLeft: 20,
  },
  sectionText: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  deleteText: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  actionBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#1A535C',
    marginVertical: 20,
    marginHorizontal: 10,
    width: 120,
    height: 50,
    borderRadius: 10,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  safeArea: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'ivory',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: 20,
    borderWidth: 10,
    borderRadius: 20,
  },
  scrollView: {
    flex: 2,
    alignSelf: 'stretch',
    paddingHorizontal: 10,
  },
  streakView: {
    flexDirection: 'row',
    borderRadius: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sectionBox: {
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  imageButton: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginLeft: 5,
  },
});

export default TaskDetails;
