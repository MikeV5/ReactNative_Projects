import { StatusBar  } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useState} from 'react';

export default function App() {

  const[counter, setCounter] = useState(0);

  const handleIncrement = () =>{
    setCounter(counter+1);
  }
  const handleDecrement = () =>{
    if(counter<=0) return;
    setCounter(counter-1);
  }


  return (
    <View style={styles.container}>
      <Text>My counter App!</Text>
      <Button title="Click me to increment!" onPress={handleIncrement}></Button>
      <Button title="Click me to decrement!" onPress={handleDecrement}></Button>
      <Text>{counter}</Text>
      <StatusBar style="auto" />
    </View>
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
