
import React from 'react';

//tabs.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './home1';
import Today from './today';
import Histogram from './histogram';
import Table1 from './table1';


//https://icons.expo.fyi/Index/MaterialCommunityIcons/chart-histogram  icon 專區
import { Ionicons } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true, // New prop name in React Navigation 6
            }}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                
                options={{
                    tabBarLabel: 'Home' ,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }} // Option to provide a label for the tab
                
            />
            <Tab.Screen 
                name="Today" 
                component={Today} 
                options={{ 
                    tabBarLabel: 'Today',
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name="note" size={size} color={color} />
                    ),
                 }} // Option to provide a label for the tab
            />
            <Tab.Screen 
                name="Histogram" 
                component={Histogram} 
                options={{ 
                    tabBarLabel: 'Histogram' ,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chart-histogram" size={size} color={color} />
                    ),
                }} // Option to provide a label for the tab
            />
            <Tab.Screen 
                name="Table" 
                component={Table1} 
                options={{ 
                    tabBarLabel: 'table' ,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="table" size={size} color={color} />
                    ),
                }} // Option to provide a label for the tab
            />
        </Tab.Navigator>
    );
}

export default Tabs;
