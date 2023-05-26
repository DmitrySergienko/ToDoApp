import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Home from './src/screens/Home';
import Login from './src/screens/Login';

import {Provider} from 'react-redux';
import { Store } from './src/redux/store';



const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>

    </Provider>

  );
}


export default App;
