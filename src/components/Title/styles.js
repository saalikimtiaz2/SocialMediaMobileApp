import {getFontFamily} from '@/assets/Fonts/helper';
import colors from '@/styles/colors';
import {scalingFontSize} from '@/styles/scaling';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scalingFontSize(24),
  },
});

export default styles;
