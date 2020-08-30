import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import HomeStackNavigator from './navigators/HomeStackNavigator';

enableScreens();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'AuthStack'} component={AuthStackNavigator} />
        <Stack.Screen name={'HomeStack'} component={HomeStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
