import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'

import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

// This is the content of the Drawer
// Contains the list of items in the Drawer
// You can add as many screens as you want

const DrawerNavigator = () => {
  return (    
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label={'Show Joke'} onPress={() => props.navigation.navigate("Joke")} />
        </DrawerContentScrollView>
      )
    }}>
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;