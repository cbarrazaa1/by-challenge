import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export function Item({name, measurement}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../images/table.png')}
          style={styles.image}></Image>
      </View>
      <View style={styles.textContainer}>
        <Text>
          {name} {measurement}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    marginLeft: 20,
  },
  containerImage: {
    flex: 4,
  },
  image: {
    flex: 1.1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
  },
});
