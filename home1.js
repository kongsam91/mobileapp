// home1.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState('');

  
  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    console.log(date.dateString);

    
    saveCaseoUserDevice(date.dateString);
    
  };
  // const getCaseFromUserDevice = async () => {
  //   try {
  //     const newCase = await AsyncStorage.getItem('selectedDate');
  //     if (newCase != null) {
  //       //setCard(JSON.parse(newCase));
  //       const parsedData = JSON.parse(newCase);
  //       const formattedData = parsedData.map(item => [item.date, item.kind, item.cost, item.item]);
  //       setTableData(formattedData);
  //       console.log("TABLE PAGE GET :" + formattedData);
  //     } else {
  //       setTableData([]);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const saveCaseoUserDevice = async (selected) => {
    try {
      const stringifynewCase = JSON.stringify(selected);
      await AsyncStorage.setItem('selectedDate', stringifynewCase);
      console.log(stringifynewCase);
    } catch (error) {
      console.log(error);
    }
  };








  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Calendar
        style={styles.calendar}
        onDayPress={handleDateSelect}
        markedDates={{
          [selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
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
