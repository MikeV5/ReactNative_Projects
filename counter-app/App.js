import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewScreen from './NewScreen';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [contatore, setContatore] = useState(0);

  const handleIncrement = () => { //funzione per incrementare il contatore
    setContatore(contatore + 1);
  };

  const handleDecrement = () => { //funzione per decrementare il contatore
    if (contatore === 0) {
      alert('Non puoi decrementare oltre lo 0');
      return;
    } else {
      setContatore(contatore - 1);
    }
  };

  return (
    <View style={styles.container}> {/*View simile  a un div*/}
      <Text>Prima app</Text>
      <Text> Contatore: {contatore}</Text>
      <StatusBar style="auto" />
      <Button title="Clicca per aumentare" onPress={handleIncrement} />
      <Button title="Clicca per decrementare" onPress={handleDecrement} />
      <Button title="Vai alla nuova schermata" onPress={() => navigation.navigate('NewScreen')} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewScreen" component={NewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
