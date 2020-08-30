import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export function Input({style, ...props}) {
  return <TextInput {...props} style={[styles.input, style]} />;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    marginVertical: 20,
    padding: 20,
    borderRadius: 8,
    opacity: 0.7,
  },
});
