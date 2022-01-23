import React from "react";
import { View, StyleSheet, Text } from "react-native";


// This is the Tab2 screen
// Contains nothing but a text
const Tab2 = () => {
  return (
    <View style={styles.center}>
      <Text>This is the other Tab screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Tab2;