import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const headerMax = 120,
  headerMin = 70,
  profileMax = 80,
  profileMin = 40;

export function Header() {
  return (
    <View>
      <View style={styles.headerContainer}></View>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.scrollViewContent}>
          <Image source={require('../images/logo2.png')}></Image>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    height: headerMax,
  },
  scrollViewContainer: {
    flex: 1,
  },
  scrollViewContent: {
    height: profileMax,
    width: profileMax,
    borderRadius: profileMax / 2,
    borderColor: 'white',
    borderWidth: 1,
    overflow: 'hidden',
    marginTop: headerMax - profileMax / 2,
    marginLeft: 10,
  },
  imageView: {
    flex: 1,
    width: null,
    height: null,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 26,
    paddingLeft: 10,
  },
});
