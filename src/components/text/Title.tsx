import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { Color } from '../../helper/Color';


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    color: Color.TEXT_LIGHT,
  },
});

const Title: React.FC<TextProps> = ({ style, ...props }) => {
  return <Text style={[styles.text, style]} {...props} />;
};

export default Title;
