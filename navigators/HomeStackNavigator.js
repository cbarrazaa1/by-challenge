import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={'Home'} component={HomeScreen} />
      <HomeStack.Screen name={'Map'} component={MapScreen} />
    </HomeStack.Navigator>
  );
}
