import React, { useEffect, useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import ky from "ky";

const url = 'https://v2.jokeapi.dev/joke/Any';


// This is Joke screen
// Contains the a Button that fectches the Joke from the API
// Contains a Text that displays the fetched Joke
const Joke = () => {
  const [state, setState] = useState(1);            // state = 1
  const [joke, setJoke] = useState('');             // joke = ''

  useEffect(async () => {                           // useEffect is a hook that runs after every render
    const res = await ky.get(url).json();           // fetching data from the API
    console.log(res);                               // console.log is a function that prints the data to the console
    setJoke(res.joke);                              // setting the state of the joke to the fetched data
  }, [state]);                                      // the second argument is an array of dependencies. If the array is empty, the effect will only run once.

  return (
    <View style={styles.center}>
      <h1>Joke</h1>
      <Button title="Fetch Joke" onPress={() => setState(state + 1)}> Get Joke</Button>
      <Text>{joke}</Text>
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

export default Joke;