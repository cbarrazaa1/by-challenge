import {useState, useCallback} from 'react';

export default function useComponentSize() {
  const [size, setSize] = useState(null);

  const onLayout = useCallback(e => {
    const {width, height} = e.nativeEvent.layout;
    setSize({width, height});
  }, []);

  return [size, onLayout];
}