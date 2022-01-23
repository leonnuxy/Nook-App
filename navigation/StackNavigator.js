import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import Joke from "../screens/Joke";
import Tab2 from "../screens/Tab2";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

// Main Stack Navigator
// Contains the list of screens in the app
// You can add as many screens as you want
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Joke" component={Joke} />
    </Stack.Navigator>
  );
};

// Tab Stack Navigator
// Contains the list of screens in the app
// You can add as many screens as you want
const TabStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Tab2" component={Tab2} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, TabStackNavigator };