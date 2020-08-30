import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {StyleSheet, View, ScrollView, TextInput, Icon} from 'react-native';
import {Establishment} from '../components/Establishment';
import {Header} from '../components/Header';
import {HomeScreen} from './HomeScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function EstablishmentScreen() {
  const places = [
    {
      room_id: '1001',
      name: 'Auditorio San Pedro',
      imgUrl: require('../images/auditorio.jpg'),
    },
    {
      room_id: '1001',
      name: 'Crowne Plaza',
      imgUrl: require('../images/crowne.jpg'),
    },
    {
      room_id: '1001',
      name: 'Cinepolis Valle Soleado',
      imgUrl: require('../images/cinepolis.jpg'),
    },
    {
      room_id: '1001',
      name: 'Parque Fundidora',
      imgUrl: require('../images/fundidora.jpg'),
    },
    {
      room_id: '1001',
      name: 'Restaurante Gaucho',
      imgUrl: require('../images/gaucho.jpg'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.containerView}>
          <View style={styles.containerText}>
            <Ionicons
              name={'search-outline'}
              size={20}
              style={{marginRight: 10}}
            />
            <TextInput
              placeholder="Search Establishment"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
              style={styles.textInput}></TextInput>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerView: {
    height: 80,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  containerText: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 1,
    marginTop: 30,
  },
  headingContainer: {
    alignItems: 'center',
    flexGrow: 0.3,
    fontWeight: 'bold',
    fontSize: 40,
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
  buttonAddContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogin: {
    width: '100%',
    backgroundColor: '#2F9AF4',
  },
  buttonAdd: {
    height: 150,
    width: 150,
    borderRadius: 300,
    backgroundColor: '#3E95D7',
  },
  scrollView: {
    flexGrow: 1,
    marginTop: 25,
    backgroundColor: 'blue',
  },
  itemList: {
    height: 50,
    width: '80%',
    backgroundColor: 'orange',
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },
  logo: {
    width: 350,
    height: 350,
  },
  title: {
    color: '#3E95D7',
    marginTop: 30,
    fontSize: 36,
    flexGrow: 0.2,
    textAlign: 'center',
  },
  textInput: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: 'white',
  },
});
