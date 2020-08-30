import * as React from 'react';
import {useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Canvas from 'react-native-canvas';
import useComponentSize from '../util/useComponentSize';

function MapScreen() {
  const [size, onLayout] = useComponentSize();
  const route = useRoute();
  const tables = route?.params?.tables ?? [];

  const handleCanvas = useCallback(canvas => {
    if (size == null) {
      return;
    }
    let {width: w, height: h} = size;
    h /= 2;
    [canvas.width, canvas.height] = [w, h];
    const ctx = canvas.getContext('2d');
    const originOffsetX = w / 2;
    const originOffsetY = h / 2;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);

    // process values
    for (let i = 0; i < tables.length - 1; i++) {
      for (let j = 1; j < tables.length; j++) {
        if (Math.abs(tables[i].x - tables[j].x) <= 25) {
          const diff = tables[i].x - tables[j].x;
          if (diff <= 0) {
            tables[j].x += 35;
          } else {
            tables[i].x += 35;
          }
        }

        if (Math.abs(tables[i].y - tables[j].y) <= 25) {
          const diff = tables[i].y - tables[j].y;
          if (diff <= 0) {
            tables[j].y += 35;
          } else {
            tables[i].y += 35;
          }
        }
      }
    }

    tables.forEach(table => {
      if (table.x >= w / 2) {
        table.x = w / 2 - 12.5;
      }

      if (table.y >= h / 2) {
        table.y = h / 2 - 12.5;
      }

      if (table.x <= -(w / 2)) {
        table.x = -(w / 2) + 12.5;
      }

      if (table.y <= -(h / 2)) {
        table.y = -(h / 2) + 12.5;
      }

      ctx.fillStyle = 'white';
      ctx.fillRect(table.x + originOffsetX - 12.5, table.y + originOffsetY - 12.5, 25, 25);
    })

    ctx.lineWidth = 2;
    for (let i = 0; i < tables.length - 1; i++) {
      for (let j = 1; j < tables.length; j++) {
        ctx.strokeStyle = 'green';
        if (Math.abs(tables[i].x - tables[j].x) <= 50 && Math.abs(tables[i].y - tables[j].y) <= 50) {
          ctx.strokeStyle = 'red';
        }

        ctx.beginPath();
        ctx.moveTo(tables[i].x + originOffsetX, tables[i].y + originOffsetY);
        ctx.lineTo(tables[j].x + originOffsetX, tables[j].y + originOffsetY);
        ctx.stroke();
      }
    }
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
