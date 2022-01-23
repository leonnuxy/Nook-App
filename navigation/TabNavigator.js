import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator, TabStackNavigator } from './StackNavigator'

const Tab = createBottomTabNavigator();

// This is the Bottom Tab Navigator
// Contains the list of screens in the app
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab 1" component={MainStackNavigator} />
      <Tab.Screen name="Tab 2" component={TabStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator