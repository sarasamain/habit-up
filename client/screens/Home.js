import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image source={require('../assets/habitupv2.png')} style={styles.logo} />
      <Text style={styles.text}>
        Are you ready, hey, are you ready for this? Are you hanging on the edge
        of your seat?{' '}
      </Text>
      <View style={styles.goToTasks}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TodayTasks');
          }}
        >
          <View style={styles.getStartedBox}>
            <Text style={styles.textButton}>Today's Tasks Todo</Text>
            <Image
              source={require('../assets/whitearrowright.png')}
              style={styles.imageButton}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.goToTasks}>
        <View style={styles.getStartedBox}>
          <Text style={styles.textButton}>Get inspiration today</Text>
          <Image
            source={require('../assets/whitearrowright.png')}
            style={styles.imageButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 50,
    backgroundColor: 'ivory',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  text: {
    color: 'grey',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    alignSelf: 'center',
  },
  getStartedBox: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1A535C',
    marginVertical: 10,
    marginHorizontal: 10,
    width: 400,
    height: 70,
    borderRadius: 10,
  },
  imageButton: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginLeft: 5,
  },
});

export default Home;
