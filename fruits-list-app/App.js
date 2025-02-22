import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, TouchableOpacity } from 'react-native';


export default function App() {

  let initialFruits = [
    { id: '0', name: 'mela' },
    { id: '1', name: 'arancia' },
    { id: '2', name: 'banana' },
  ];

  const [fruit, setFruit] = useState('');
  const [fruits, setFruits] = useState(initialFruits);
  const [nextID, setNextID] = useState(initialFruits.length);


  return (  // Specifica cosa deve essere renderizzato/visualizzato

    <SafeAreaView style={styles.container}> //Crea un contenitore SafeAreaView che avvolge altri elementi
      <View style={styles.innerContainer}> //Crea un contenitore View che avvolge altri elementi (simile a un div in HTML)
        <Text>Fruit list</Text>
        <View style={styles.rowContainer}>
          <TextInput backgroundColor='white' width='150'
            value={fruit}
            placeholder='Add a fruit'
            onChangeText={text => setFruit(text)}>
          </TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {

              if(fruit.trim()==='') return;

              const newID = nextID;
              setNextID(nextID + 1);
              setFruits(
                [...fruits,
                {
                  id: newID.toString(),
                  name: fruit
                }
                ]);
            }}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        {fruits.map(fruit => (
          <View key={fruit.id} style={styles.rowContainer}>
            <Text key={fruit.id}>
              ID: {fruit.id} - Nome: {fruit.name}
            </Text>
            <Button title='Delete'
            onPress={()=>
            {
              setFruits(fruits.filter(f=>f.id!==fruit.id));
            }}

            >
            </Button>
          </View>
        ))}
      </View>
      <StatusBar style="auto" /> //Barra di stato e auto per il colore di sfondo (auto = backgroundColor)
    </SafeAreaView>
  );

}


//Definizione degli stili
const styles = StyleSheet.create({ //Simile a CSS ma per React Native
  container: {
    flex: 1, //contenitore di elementI, occupa tutto lo schermo
    backgroundColor: '#00ffff', //Colore di sfondo
  },
  innerContainer: {
    flex: 1, //La view occupa tutto lo schermo
    alignItems: 'center', //Centra gli elementi orizzontalmente
    justifyContent: 'flex-start', //Centra gli elementi verticalmente
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00ffff',
    padding: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    borderRadius: 5,
  },
});
