
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  //properties
  const [name, setName] = useState('JS')
  const [sesion, setSession] = useState({ number: 1, title: 'Title' })
  const [current, setCurrent] = useState(true)


  // function 
  const onClickHandler = () => {
    setName("Java")
    setSession({ number: 2, title: 'New Title' })
    setCurrent(false)
  }

  //ui

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{sesion.title} # {sesion.number} </Text>
      <Text style={styles.text}>Programming on {name} </Text>
      <Text style={styles.text}>{current ? 'currentsession' : 'next session'} </Text>
      <Button title='ChangeState' onPress={onClickHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff'
  }
});

export default App;

