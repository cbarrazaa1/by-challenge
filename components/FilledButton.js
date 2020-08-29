import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export function FilledButton({title, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 3,
    borderRadius: 7,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
});
