import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const Stack = createStackNavigator();

function ScreenA({navigation}) {
  
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  };

  return (
    <View>
      <Text>Screen A</Text>

      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'red' : 'grey',
          },
        ]}>
        <Text>Navigate to screen B</Text>
      </Pressable>
    </View>
  );
}

function ScreenB({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_A');
  };

  return (
    <View>
      <Text>Screen B</Text>

      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'red' : 'grey',
          },
        ]}>
        <Text>Navigate to screen A</Text>
      </Pressable>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen_A" component={ScreenA} />

        <Stack.Screen name="Screen_B" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffff32',
  },
});

export default App;
