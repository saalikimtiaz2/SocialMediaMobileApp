import {getFontFamily} from '@/assets/Fonts/helper';
import colors from '@/styles/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 24,
  },
});

export default styles;
