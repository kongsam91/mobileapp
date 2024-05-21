// App.js
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './tabs';
import Card1Day  from './Card1Day'
export default function App() {

  const [selected, setSelected] = useState('');
  
  return (
      <NavigationContainer>
        
        {/* <Card1Day /> */}
        <Tabs/>
      </NavigationContainer>
      // <StatusBar style="auto" />
      

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
