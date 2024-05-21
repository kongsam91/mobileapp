//tabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './home1';
import Today from './today';
import Histogram from './histogram';

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
                options={{ tabBarLabel: 'Home' }} // Option to provide a label for the tab
            />
            <Tab.Screen 
                name="Today" 
                component={Today} 
                options={{ tabBarLabel: 'Home2' }} // Option to provide a label for the tab
            />
            <Tab.Screen 
                name="histogram" 
                component={Histogram} 
                options={{ tabBarLabel: 'Home3' }} // Option to provide a label for the tab
            />
        </Tab.Navigator>
    );
}

export default Tabs;
