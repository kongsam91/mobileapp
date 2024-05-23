
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Btn_add  = () => {

  const [date, setDate] = React.useState([]);
  const [cost, setCost] = React.useState([]);
  const [detail, setDetail] = React.useState([]);
  const [kind, setKind] = React.useState([]);

  const addCase = () => {
    if (textInput. === '') {
      Alert.alert('啊哈', '請輸入文字');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
        time: new Date(),
      };
      setTodos([...todos, newTodo]);
      setTextInput('');
    }
  };




}

export default Btn_add;