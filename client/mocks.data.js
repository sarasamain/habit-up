import { NativeModules } from "react-native";

const TASKS = [
  { taskId:'task001', taskName: 'Water plants ', description: 'Cause otherwise they die', color: 'lightblue', currentSreak: 1, maxStreak: 5, type: 'check', goal: 1},
  { taskId:'task002', taskName: 'Push ups', description: 'Need to get fit for (next) summer', color: 'lavender', currentSreak: 1, maxStreak: 5, type: 'count', goal: 10},
  { taskId:'task003', taskName: '5 a day', description: 'Healthy and balanced diet!', color: 'pink', currentSreak: 1, maxStreak: 5, type: 'count', goal: 5},
  { taskId:'task004', taskName: 'Solo Project', description: 'I need a joooob', color: 'lavender', currentSreak: 1, maxStreak: 5, type: 'time', goal: 36000},
  { taskId:'task005', taskName: 'Social Media', description: 'Because they are evil', color: 'lightblue', currentSreak: 1, maxStreak: 5, type: 'time', goal: 600},
  { taskId:'task006', taskName: 'Play with cat', description: 'She is just SO CUTEEEE', color: 'pink', currentSreak: 1, maxStreak: 5, type: 'count', goal: 1200},
  { taskId:'task007', taskName: 'Other task 01', description: 'Reason to do it', color: 'whitesmoke', currentSreak: 1, maxStreak: 5, type: 'check', goal: 10},
  { taskId:'task008', taskName: 'Other task 02', description: 'Reason to do it', color: 'whitesmoke', currentSreak: 1, maxStreak: 5, type: 'check', goal: 10},
  { taskId:'task009', taskName: 'Other task 03', description: 'Reason to do it', color: 'whitesmoke', currentSreak: 1, maxStreak: 5, type: 'check', goal: 10},
  { taskId:'task010', taskName: 'Other task 04', description: 'Reason to do it', color: 'whitesmoke', currentSreak: 1, maxStreak: 5, type: 'check', goal: 10},
  { taskId:'task011', taskName: 'Other task 05', description: 'Reason to do it', color: 'whitesmoke', currentSreak: 1, maxStreak: 5, type: 'check', goal: 10},
  { taskId:'task012', taskName: 'Other task 06', description: 'Reason to do it', color: 'whitesmoke', currentSreak: 1, maxStreak: 5, type: 'check', goal: 10},
];

module.exports = TASKS;