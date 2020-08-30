import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Canvas from 'react-native-canvas';

/*
  type Table = {
    x: number;
    y: number;
  }
*/

function MapScreen({tables}) {
  const handleCanvas = (canvas) => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 100, 100);
  };

  return (
    <View>
      <Canvas ref={handleCanvas.current} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  canvas: {
    width: '100%',
    height: '50%',
  },
});

export default React.memo(MapScreen);
