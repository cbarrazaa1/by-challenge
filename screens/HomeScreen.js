import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, Picker, ScrollView} from 'react-native';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {Error} from '../components/Error';
import {Item} from '../components/Item';
import {accelerometer, setUpdateIntervalForType} from 'react-native-sensors';

function computeVelocity(vel, accel, t0, t1) {
  return {
    x: vel.x + accel.x * (t1 - t0),
    y: vel.y + accel.y * (t1 - t0),
    z: vel.z + accel.z * (t1 - t0),
  };
}

function computeAverageVelocity(prevVel, vel) {
  return {
    x: (prevVel.x + vel.x) / 2,
    y: (prevVel.y + vel.y) / 2,
    z: (prevVel.z + vel.z) / 2,
  };
}

function computePosition(pos, vel, t0, t1) {
  return {
    x: pos.x + vel.x * (t1 - t0),
    y: pos.y + vel.y * (t1 - t0),
    z: pos.z + vel.z * (t1 - t0),
  };
}

const ZERO_VECTOR = {x: 0, y: 0, z: 0};
function zeroVector() {
  return {...ZERO_VECTOR};
}

export function HomeScreen({navigation}) {
  const options = ['Tables', 'Chairs'];
  const [subscription, setSubscription] = useState(null);
  const [tables, setTables] = useState([]);
  const [calibrated, setCalibrated] = useState(false);
  const positions = useRef([]);
  const velocities = useRef([]);
  const accelerations = useRef([]);
  const gravity = useRef(zeroVector());

  useEffect(() => {
    // give 5 seconds to calibrate gravity
    setTimeout(() => {
      console.log('Gravity calibrated.');
      setCalibrated(true);
    }, 10000);

    setUpdateIntervalForType('accelerometer', 200);
    setSubscription(
      accelerometer.subscribe((values) => {
        const {x: prevGx, y: prevGy, z: prevGz} = gravity.current;
        gravity.current = {
          x: 0.9 * prevGx + 0.1 * values.x,
          y: 0.9 * prevGy + 0.1 * values.y,
          z: 0.9 * prevGz + 0.1 * values.z,
        };

        if (calibrated) {
          return;
        }

        const accel = {
          x: (values.x - gravity.current.x) / 9.81,
          y: (values.y - gravity.current.y) / 9.81,
          z: (values.z - gravity.current.z) / 9.81,
        };
        const THRESHOLD = 0.01;
        let isZero = false;

        if (
          Math.abs(accel.x) <= THRESHOLD ||
          Math.abs(accel.y) <= THRESHOLD ||
          Math.abs(accel.z) <= THRESHOLD
        ) {
          isZero = true;
        }

        if (accelerations.current.length === 0 || isZero) {
          accelerations.current.push(zeroVector());
          velocities.current.push(zeroVector());
          positions.current.push(zeroVector());
        } else {
          const t = accelerations.current.length;
          const vel = computeVelocity(
            velocities.current[t - 1],
            accel,
            t - 1,
            t,
          );
          const avgVel = computeAverageVelocity(velocities.current[t - 1], vel);
          const pos = computePosition(
            positions.current[t - 1],
            avgVel,
            t - 1,
            t,
          );

          accelerations.current.push(accel);
          velocities.current.push(avgVel);
          positions.current.push(pos);
        }
      }),
    );

    return () => subscription.unsubscribe();
  }, []);

  const onAddPress = () => {
    if (tables.length === 0) {
      setTables((prev) =>
        prev.concat({x: 0, y: 0, time: positions.current.length - 1}),
      );
    } else {
      const last = tables[tables.length - 1];
      let {x: totalX, y: totalY, time} = last;
      [totalX, totalY] = [0, 0];
      for (let i = time; i < positions.current.length; i++) {
        totalX += positions.current[i].x;
        totalY += positions.current[i].y;
      }

      console.log('table', totalX, totalY);
      setTables((prev) =>
        prev.concat({x: totalX * 25, y: totalY * 25, time: positions.current.length - 1}),
      );
    }
  };

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
    <ScrollView style={styles.container} contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Measure Items</Text>
      </View>
      {/* <View style={styles.pickerViewContainer}>
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
      </View> */}
      <View style={styles.buttonAddContainer}>
        <FilledButton
          style={styles.buttonAdd}
          enabled={calibrated}
          title={!calibrated ? 'Calibrating...' : 'Add Item'}
          onPress={onAddPress}
        />
      </View>
      {/* <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => {
          return <Item name={item.type} measurement={item.measurement} />;
        })}
      </ScrollView> */}
      <View style={styles.buttonContainer}>
        <FilledButton
          style={styles.buttonLogin}
          title={'Render'}
          onPress={() => {
            navigation.navigate('Map', {tables});
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
    fontWeight: 'bold',
    fontSize: 40,
    justifyContent: 'center',
    marginVertical: 20,
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
    fontSize: 36,
    textAlign: 'center',
    margin: 0,
  },
});
