//today.js
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Card1Day from './Card1Day'; // Import your card component
import Card1 from './card1';


export default function Today() {


  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <View style={styles.card} >
        <Card1 />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: 50, // Adjust top padding as needed
    //width: '100%', // Full width
  },
  card: {
    // flex: 1,
    // width: '80%', // Full width
    
    // margin:30,
  },
});