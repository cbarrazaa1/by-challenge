import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {ModelScreen} from '../screens/ModelScreen';

const HomeStack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={'Home'} component={HomeScreen} />
      <HomeStack.Screen name={'Model'} component={ModelScreen} />
    </HomeStack.Navigator>
  );
}
