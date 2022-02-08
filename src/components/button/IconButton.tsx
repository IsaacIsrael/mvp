import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, TouchableOpacityProps, TextStyle } from 'react-native';

import { Color } from '../../helper/Color';
import { Sizes } from '../../helper/Sizes';
import Touchable  from './Touchable';
import { FontAwesome,  } from '@expo/vector-icons';
import { FontAwesomeName } from '../../types/Icon';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.PRIMARY,
    paddingVertical: Sizes.GUTTER * 0.75,
    paddingHorizontal: Sizes.GUTTER * 0.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    shadowOpacity: 0,
  },
  icon: {
    color: Color.TEXT_LIGHT,
  },
  iconDisabled: {
  },
});

type IconButtonProps = {
  icon: FontAwesomeName;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  children?: undefined;
  disabled?: boolean;
};

type Props = IconButtonProps & Omit<TouchableOpacityProps, keyof IconButtonProps>;

const IconButton: React.FC<Props> = ({ icon, style, disabled, titleStyle, ...props }) => {
  return (
    <Touchable
      {...props}
      style={[styles.button, disabled && styles.buttonDisabled, style]}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <FontAwesome size={20} style={styles.icon} name={icon} />
    </Touchable>
  );
};

IconButton.defaultProps = {
  style: {},
  titleStyle: {},
  children: undefined,
  disabled: false,
};

export default IconButton;
