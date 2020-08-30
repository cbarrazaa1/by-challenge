import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import {EstablishmentScreen} from '../screens/EstablishmentScreen';
import {RoomScreen} from '../screens/RoomScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createBottomTabNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name={'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <HomeStack.Screen
        name={'Establishment'}
        component={EstablishmentScreen}
        options={{
          tabBarLabel: 'Establishment',
          tabBarIcon: ({color, size}) => (
            <Ionicons name={'location-outline'} size={size} color={color} />
          ),
        }}
      />
      <HomeStack.Screen
        name={'Rooms'}
        component={RoomScreen}
        options={{
          tabBarLabel: 'Room',
          tabBarIcon: ({color, size}) => (
            <Ionicons name={'add-circle-outline'} size={size} color={color} />
          ),
        }}
      />
      <HomeStack.Screen
        name={'Map'}
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color, size}) => (
            <Ionicons name={'locate-outline'} size={size} color={color} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}
