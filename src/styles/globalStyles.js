import {getFontFamily} from '@/assets/Fonts/helper';
import {StyleSheet} from 'react-native';
import colors from './colors';

const globalStyles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 27,
    marginRight: 34,
    marginTop: 17,
  },
  messageIcon: {
    backgroundColor: colors.grey,
    borderRadius: 100,
    padding: 14,
  },
  messageNumber: {
    color: colors.white,
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 6,
  },
  messageNumberContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    flexDirection: 'row',
    height: 10,
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    top: 12,
    width: 10,
  },
  userStoryContainer: {
    marginHorizontal: 28,
    marginTop: 20,
  },
});

export default globalStyles;
