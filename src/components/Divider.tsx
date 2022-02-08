import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Color } from '../helper/Color';
import { Sizes } from '../helper/Sizes';

const styles = StyleSheet.create({
  container: {
    marginTop: Sizes.GUTTER ,
    width: '100%',
    borderColor: Color.WHITE,
    borderWidth: 0.5,
    opacity: 0.4,
    marginBottom:Sizes.GUTTER,
  },
});

type Props ={
    style?: StyleProp<ViewStyle>
}

const Divider: React.FC<Props> = ({ style, }) => {
  return <View style={[styles.container, style]}  />;
};

export default Divider;
