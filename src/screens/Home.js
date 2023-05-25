import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Home() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Save</Text>
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
});
