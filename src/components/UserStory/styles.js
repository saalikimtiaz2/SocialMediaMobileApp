import {getFontFamily} from '@/assets/Fonts/helper';
import colors from '@/styles/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  userName: {
    color: colors.black,
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default styles;
