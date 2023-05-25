import React, { useState, useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS ' +
        'Users ' +
        '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);',
    );
  });
};

export default function Login({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    createTable();
  }, []);

  const setData = async () => {
    if (name.length === 0) {
      Alert.alert('Warning', 'No value entered');
    } else {
      await db.transaction(async tx => {
        tx.executeSql(
          'INSERT INTO Users (Name, Age) VALUES (?, ?)',
          [name, age],
          (tx, results) => {
            console.log('Data inserted successfully!');
          },
          (tx, error) => {
            console.log('Error inserting data:', error);
          },
        );
      });

      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Logo screen</Text>
      <TextInput style={styles.input} onChangeText={value => setName(value)} />
      <TextInput style={styles.input} onChangeText={value => setAge(value)} />
      <View style={{ marginTop: 40 }}>
        <Button style={styles.input} onPress={setData} title="Button" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, alignItems: 'center', backgroundColor: '#0080ff' },
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
