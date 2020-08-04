import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

const TaskCalendar = ({ task }) => {
  const taskHistoryRender = task.history;

  const handleArrowDirection = (direction) => {
    if (direction === 'right') {
      return <Text> Next </Text>;
    } else if (direction === 'left') {
      return <Text> Previous </Text>;
    }
  };

  const showMonthName = (date) => {
    const timestamp = date.valueOf();
    return (
      <Text style={styles.header}> {moment(timestamp).format('MMMM')} </Text>
    );
  };

  return (
    <View>
      <Calendar
        current={Date()}
        minDate={'2020-01-01'}
        maxDate={'2020-10-30'}
        monthFormat={'MMM yyyy'}
        hideArrows={false}
        renderArrow={(direction) => handleArrowDirection(direction)}
        hideExtraDays={false}
        disableMonthChange={false}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={false}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableArrowLeft={false}
        disableArrowRight={false}
        disableAllTouchEventsForDisabledDays={true}
        renderHeader={(date) => showMonthName(date)}
        markedDates={taskHistoryRender}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
  },
});

export default TaskCalendar;
