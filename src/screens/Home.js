import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text,ScrollView } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

//create db ========================
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

//====================

export default function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = () => {
    try {
      db.transaction(tx => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            var usersArray = [];
            for (let i = 0; i < len; i++) {
              var user = results.rows.item(i);
              usersArray.push(user);
            }
            setUsers(usersArray);
          }
          setIsLoading(false);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    
    <View style={styles.body}>
      {isLoading ? (
        <Text style={styles.text}>Loading...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.header}>Users:</Text>
          {users.map((user, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.text}>Name: {user.Name}</Text>
              <Text style={styles.text}>Age: {user.Age}</Text>
            </View>
          ))}
          {users.length === 0 && <Text style={styles.text}>No users found.</Text>}
          </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, alignItems: 'center', backgroundColor: '#0080ff' },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: 300,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000000',
  },
  scrollContainer: { alignItems: 'center' },
});
