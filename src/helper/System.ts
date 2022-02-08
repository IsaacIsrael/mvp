import { Platform, Dimensions } from 'react-native';

const systemOS = Platform.OS;

const { width, height } = Dimensions.get('window');

const System = {
  os: systemOS,
  isOs: systemOS === 'ios',
  isAndroid: systemOS === 'android',
  windowHeight: height,
  windowWidth: width,
};

export default System;
