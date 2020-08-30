import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {Error} from '../components/Error';
import {Header} from '../components/Header';

export function RegisterScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../images/logo2.png')} />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder={'First Name'} placeholderTextColor="#4B4B4B" />
        <Input placeholder={'Last Name'} placeholderTextColor="#4B4B4B" />
        <Input
          placeholder={'Email'}
          placeholderTextColor="#4B4B4B"
          keyboardType={'email-address'}
        />
        <Input
          placeholder={'Password'}
          placeholderTextColor="#4B4B4B"
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <FilledButton
          style={styles.buttonLogin}
          title={'Register'}
          onPress={() => {
            navigation.navigate('HomeStack', {screen: 'Map'});
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#60b0f4',
  },
  logoContainer: {
    marginTop: 25,
    alignItems: 'center',
    flexGrow: 0.1,
    justifyContent: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
  },
  buttonLogin: {
    width: '100%',
    backgroundColor: '#2F9AF4',
  },
  logo: {
    width: 250,
    height: 250,
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 40,
    flexGrow: 0.1,
    textAlign: 'center',
    opacity: 0.9,
  },
});
