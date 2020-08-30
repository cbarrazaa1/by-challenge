import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';

const AuthStack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={'Login'} component={LoginScreen} />
      <AuthStack.Screen name={'Register'} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}
