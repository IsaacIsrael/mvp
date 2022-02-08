import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { Color } from '../../helper/Color';


const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.25,
    color: Color.TEXT_LIGHT,
  },
});

const Body: React.FC<TextProps> = ({ style, ...props }) => {
  return <Text style={[styles.text, style]} {...props} />;
};

export default Body;
