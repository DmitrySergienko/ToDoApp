import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';



export default function Login({navigation}) {
  const [name, setName] = useState('');

  //in case no input Alert, or navigate to Login
  const setData = () => {
    if (name.length == 0) {
      Alert.alert('Warning', 'No value entrered');
    } else {
      navigation.navigate('Home')
    }
  };

  return (
   
      <View style={styles.body}>
      <Text style={styles.text}>Logo screen</Text>
      <TextInput style={styles.input} onChangeText={value => setName(value)} />
      <View style={{marginTop: 40}}>
        <Button style={styles.input} onPress={setData} title="Button" />
      </View>
    </View>
  
    
  );
}

const styles = StyleSheet.create({
  body: {flex: 1, alignItems: 'center', backgroundColor: '#0080ff'},
  text: {
    fontSize: 30,
    color: '#ffffff',
    marginTop: 20,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    backgroundColor: '#ffffff',
  },
});
