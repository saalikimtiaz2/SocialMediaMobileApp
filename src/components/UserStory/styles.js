import {getFontFamily} from '@/assets/Fonts/helper';
import colors from '@/styles/colors';
import {
  horizontalScale,
  scalingFontSize,
  verticalScaling,
} from '@/styles/scaling';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
  },
  userName: {
    color: colors.black,
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scalingFontSize(14),
    marginTop: verticalScaling(8),
    textAlign: 'center',
  },
});

export default styles;
