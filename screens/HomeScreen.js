import React, {useState} from 'react';
import {StyleSheet, View, Text, Picker, ScrollView} from 'react-native';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {Error} from '../components/Error';
import {Item} from '../components/Item';

export function HomeScreen({navigation}) {
  const options = ['Tables', 'Chairs'];
  const items = [
    {
      type: 'Table',
      measurement: 1.34,
    },
    {
      type: 'Table',
      measurement: 1.34,
    },
    {
      type: 'Table',
      measurement: 1.34,
    },
    {
      type: 'Table',
      measurement: 1.34,
    },
    {
      type: 'Table',
      measurement: 1.34,
    },
  ];
  const {selectedValue, setSelectedValue} = useState('Tables');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Measure Items</Text>
      </View>
      <View style={styles.pickerViewContainer}>
        <Text style={styles.pickerLabel}>Item:</Text>
        <Picker
          style={styles.pickerContainer}
          mode="dialog"
          selectedValue={selectedValue}
          onValueChange={() => {}}>
          {options.map((item, index) => {
            return <Picker.Item label={item} value={index} key={index} />;
          })}
        </Picker>
      </View>
      <View style={styles.buttonAddContainer}>
        <FilledButton style={styles.buttonAdd} title={'Add Item'} />
      </View>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => {
          return <Item name={item.type} measurement={item.measurement} />;
        })}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <FilledButton
          style={styles.buttonLogin}
          title={'Render'}
          onPress={() => {
            navigation.navigate('Map');
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    alignItems: 'center',
    flexGrow: 0.3,
    fontWeight: 'bold',
    fontSize: 40,
    justifyContent: 'center',
  },
  pickerContainer: {
    width: '50%',
    alignSelf: 'flex-end',
  },
  pickerLabel: {
    marginTop: 100,
    width: '50%',
    height: '100%',
    textAlign: 'center',
    fontSize: 30,
  },
  pickerViewContainer: {
    flexDirection: 'row',
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
    flexGrow: 0.2,
    marginTop: 20,
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
});
