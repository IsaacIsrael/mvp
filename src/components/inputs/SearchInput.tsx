import React, { useState } from 'react';
import {
  StyleSheet,
  StyleProp,
  TextStyle,
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  View,
  ViewStyle,
  Keyboard,
} from 'react-native';

import { Color } from '../../helper/Color';
import { Sizes } from '../../helper/Sizes';
import IconButton from '../button/IconButton';
import Row from '../Row';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    color: Color.TEXT_DARK,
    backgroundColor: Color.WHITE,
    borderWidth: 0,
    width: '100%',
    padding: Sizes.GUTTER * 0.75,
  },
  inputFocus: {
    borderColor: Color.TEXT_LIGHT,
  },
  button:{
    paddingVertical: 0,
  }
});

type AFTextInputProps = {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  onSearch?: (value: string)=> void;
};

type Props = AFTextInputProps & Omit<TextInputProps, keyof AFTextInputProps>;

const SearchInput: React.FC<Props> = ({ containerStyle, style, onFocus, onBlur,onSearch:onSearchProps, ...props }) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const onInputFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>): void => {
    setFocus(true);

    if (onFocus) {
      onFocus(event);
    }
  };
  const onInputBluer = (event: NativeSyntheticEvent<TextInputFocusEventData>): void => {
    setFocus(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  const onSearch = ()=>{
    Keyboard.dismiss();
    
    if(onSearchProps){
        onSearchProps(value)
    }
  }

  return (
    <Row style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, focus && styles.inputFocus,  style]}
        keyboardType="web-search"
        placeholderTextColor={Color.TEXT_DARK}
        onFocus={onInputFocus}
        onBlur={onInputBluer}
        onChangeText={setValue}
        value={value}
        onSubmitEditing={onSearch}
        {...props}
      />
      <IconButton icon="search"  style={styles.button} onPress={onSearch} />
    </Row>
  );
};

SearchInput.defaultProps = {
  containerStyle: {},
  style: {},
};

export default SearchInput;
