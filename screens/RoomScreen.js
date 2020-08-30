import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('window');

export function RoomScreen() {
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
              placeholder="Search Rooms"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
              style={styles.textInput}></TextInput>
          </View>
        </View>
        <ScrollView scrollEventThrottle={16}>
          <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                paddingHorizontal: 20,
              }}>
              {' '}
              My Saved Rooms
            </Text>
            <View style={{height: 200, marginTop: 20}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    height: 150,
                    width: 150,
                    marginLeft: 20,
                    borderWidth: 0.5,
                    borderColor: '#dddddd',
                  }}>
                  <View style={{flex: 5}}>
                    <Image
                      source={require('../images/room1.jpg')}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'cover',
                      }}></Image>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 10,
                      paddingTop: 10,
                      backgroundColor: 'rgba(0, 204, 0, 0.6)',
                    }}>
                    <Text>Cupo: 30</Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 150,
                    width: 150,
                    marginLeft: 20,
                    borderWidth: 0.5,
                    borderColor: '#dddddd',
                  }}>
                  <View style={{flex: 5}}>
                    <Image
                      source={require('../images/room2.jpg')}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'cover',
                      }}></Image>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 10,
                      paddingTop: 10,
                      backgroundColor: 'rgba(0, 204, 0, 0.6)',
                    }}>
                    <Text>Cupo: 20</Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 150,
                    width: 150,
                    marginLeft: 20,
                    borderWidth: 0.5,
                    borderColor: '#dddddd',
                  }}>
                  <View style={{flex: 5}}>
                    <Image
                      source={require('../images/room3.jpg')}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'cover',
                      }}></Image>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 10,
                      paddingTop: 10,
                      backgroundColor: 'rgba(0, 204, 0, 0.6)',
                    }}>
                    <Text>Cupo: 20</Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 150,
                    width: 150,
                    marginLeft: 20,
                    borderWidth: 0.5,
                    borderColor: '#dddddd',
                  }}>
                  <View style={{flex: 5}}>
                    <Image
                      source={require('../images/room4.jpg')}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'cover',
                      }}></Image>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 10,
                      paddingTop: 10,
                      backgroundColor: 'rgba(0, 204, 0, 0.6)',
                    }}>
                    <Text>Cupo: 100</Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 150,
                    width: 150,
                    marginLeft: 20,
                    borderWidth: 0.5,
                    borderColor: '#dddddd',
                  }}>
                  <View style={{flex: 5}}>
                    <Image
                      source={require('../images/room5.jpg')}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'cover',
                      }}></Image>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 10,
                      paddingTop: 10,
                      backgroundColor: 'rgba(204, 0, 0, 0.6)',
                    }}>
                    <Text>Cupo: 40</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              marginTop: 40,
              paddingHorizontal: 20,
            }}>
            <Text style={{fontSize: 30, fontWeight: '700'}}> Verify Rooms</Text>
            <Text style={{fontSize: 15, fontWeight: '300', marginTop: 10}}>
              These next rooms do not follow the COVID-19 regulations.
            </Text>
            <View style={{width: width - 40, height: 200, marginTop: 20}}>
              <Image
                source={require('../images/room5.jpg')}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: 'cover',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#dddddd',
                }}></Image>

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '300',
                  marginTop: 10,
                }}>
                Please follow the COVID-19 guidelines.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
