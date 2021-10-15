import {Dimensions} from 'react-native';

export default {
  colors: {
    primary: '#1b75bb',
    secondary: '#f1f1f1',
    tertiary: '#858585',
    text: '#3a3a3a',
    success: '#449F0D',
    danger: '#E50000',
  },
  metrics: {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
  },
};
