import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import AuthStackNavigator from './navigators/AuthStackNavigator';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
