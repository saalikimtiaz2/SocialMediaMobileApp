import {getFontFamily} from '@/assets/Fonts/helper';
import colors from '@/styles/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderRadius: 50,
    borderWidth: 2,
    padding: 3,
  },
  storyAvatar: {
    borderRadius: 50,
    height: 65,
    width: 65,
  },
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
