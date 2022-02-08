import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Color } from '../helper/Color';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    backgroundColor: Color.BLACK,
  },
});

const BottomContainer: React.FC<ViewProps> = ({ style, ...props }) => {
  const insets = useSafeAreaInsets();
  return <View style={[styles.container, style, { marginBottom: insets.bottom }]} {...props} />;
};

export default BottomContainer;
