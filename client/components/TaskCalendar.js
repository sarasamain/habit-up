import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';

// eslint-disable-next-line prettier/prettier
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
    return <Text style={styles.header}> {moment(timestamp).format('MMMM')} </Text>;
  };

  return (
    <View>
      <Calendar
        // Initially visible month. Default = Date()
        current={Date()}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2020-01-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2020-10-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {console.log('selected day', day)}}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {console.log('selected day', day)}}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {console.log('month changed', month)}}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => handleArrowDirection(direction)}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={false}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={false}
        // Disable right arrow. Default = false
        disableArrowRight={false}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        /** Replace default month and year title with custom one. the function receive a date as parameter. */
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

// {{
//   '2020-07-25': {selected: true, selectedColor: 'limegreen'},
//   '2020-07-26': {selected: true, selectedColor: 'limegreen'},
//   '2020-07-27': {selected: true, selectedColor: 'limegreen'},
//   '2020-07-28': {selected: true, selectedColor: 'limegreen'},
//   '2020-07-29': {selected: true, selectedColor: 'limegreen'},
//   '2020-07-30': {selected: false, selectedColor: 'limegreen'},
//   '2020-07-31': {selected: false, selectedColor: 'limegreen'},
//   '2020-08-01': {selected: true, selectedColor: 'limegreen'},
//   '2020-08-02': {selected: true, selectedColor: 'limegreen'},
//   // '2020-07-29': {selected: true, selectedColor: 'tomato'},
//   // '2020-07-27': {selected: true, selectedColor: 'tomato'},
// }}