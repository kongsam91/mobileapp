// home1.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

export default function Home() {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <StatusBar style="auto" />
      <Calendar
        style={styles.calendar}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
        }}
      />
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50, // Adjust top padding as needed
  },
  title: {
    fontSize: 20,
    marginBottom: 20, // Adjust margin between title and calendar
  },
  calendar: {
    width: width - 20, // Full width with some padding
  },
});
