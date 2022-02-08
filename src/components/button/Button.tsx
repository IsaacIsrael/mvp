import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, TouchableOpacityProps, Text, TextStyle } from 'react-native';

import { Color } from '../../helper/Color';
import { Sizes } from '../../helper/Sizes';
import AFTouchable from './Touchable';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.PRIMARY,
    width: '100%',
    padding: Sizes.GUTTER ,
    alignItems: 'center',
  },
  outlineStyle:{
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Color.PRIMARY,
  },
  buttonDisabled: {
    shadowOpacity: 0,
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
    textTransform: 'uppercase',
    color: Color.TEXT_LIGHT,
  },
  textDisabled: {
  },
});

type ButtomType = 'filled' | 'outlined';

type AFButtonProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  children?: undefined;
  disabled?: boolean;
  type?: ButtomType;
};


type Props = AFButtonProps & Omit<TouchableOpacityProps, keyof AFButtonProps>;

const Button: React.FC<Props> = ({ title, style,type, disabled, titleStyle, ...props }) => {
  return (
    <AFTouchable
      {...props}
      style={[styles.button,type === 'outlined' && styles.outlineStyle,disabled && styles.buttonDisabled, style]}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={[styles.text, disabled && styles.textDisabled, titleStyle]}>{title}</Text>
    </AFTouchable>
  );
};

Button.defaultProps = {
  style: {},
  titleStyle: {},
  children: undefined,
  disabled: false,
  type:'filled'
};

export default Button;
