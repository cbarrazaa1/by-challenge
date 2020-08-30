import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {Error} from '../components/Error';

export function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../images/logo2.png')} />
        <Text style={styles.title}>
          An app use to measure, model and render public spaces according to the
          COVID legal requierements.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Error error={''} />
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
          title={'Login'}
          onPress={() => {
            navigation.navigate('HomeStack');
          }}
        />
        <FilledButton
          style={styles.buttonLogin}
          title={'Register'}
          onPress={() => {
            navigation.navigate('Register');
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
    alignItems: 'center',
    flexGrow: 0.2,
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
    width: '50%',
    backgroundColor: '#2F9AF4',
  },
  logo: {
    width: 350,
    height: 350,
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 20,
    flexGrow: 0.2,
    textAlign: 'center',
    opacity: 0.9,
  },
});
