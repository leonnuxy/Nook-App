import React from "react";
import { View, StyleSheet } from "react-native";


// This is the Home screen
// Contains nothing but a text
const Home = () => {
  return (
    <View style={styles.center}>
      <h1>HOME-PAGE</h1>
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

export default Home;