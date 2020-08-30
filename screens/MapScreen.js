import * as React from 'react';
import {useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Canvas from 'react-native-canvas';
import useComponentSize from '../util/useComponentSize';

/*
  type Table = {
    x: number;
    y: number;
  }
*/

function MapScreen() {
  const [size, onLayout] = useComponentSize();
  const route = useRoute();
  const tables = route.params.tables;

  const handleCanvas = useCallback(canvas => {
    if (size == null) {
      return;
    }
    let {width: w, height: h} = size;
    h /= 2;
    [canvas.width, canvas.height] = [w, h];
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);

    tables.forEach(table => {
      ctx.fillStyle = 'white';
      ctx.fillRect(table.x + w / 2, table.y + h / 2, 25, 25);
    })
  }, [size, tables])

  return (
    <View style={styles.root} onLayout={onLayout}>
      <Canvas style={styles.canvas}  ref={handleCanvas} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  canvas: {
    width: '100%',
    height: '50%',
  },
});

export default React.memo(MapScreen);
