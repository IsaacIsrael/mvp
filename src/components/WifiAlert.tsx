import React from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Color } from '../helper/Color';
import { Sizes } from '../helper/Sizes';
import Body from './text/Body';
import Title from './text/Title';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    backgroundColor: Color.RED,
    zIndex: 1,
    paddingHorizontal: Sizes.GUTTER,
    paddingVertical: Sizes.GUTTER * 0.5,
  },
});

const WifiAlert: React.FC<ViewProps> = ({ style, ...props }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, style, { paddingTop: insets.top + (Sizes.GUTTER  * 0.5)}]}>
        <Title>Internet Connection Problem</Title>
        <Body>Please check your internet connection</Body>
    </View>
  );
};

export default WifiAlert;
