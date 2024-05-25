import {getFontFamily} from '@/assets/Fonts/helper';
import {StyleSheet} from 'react-native';
import colors from './colors';
import {horizontalScale, scalingFontSize, verticalScaling} from './scaling';

const globalStyles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(34),
    marginTop: verticalScaling(17),
  },
  messageIcon: {
    backgroundColor: colors.grey,
    borderRadius: 100,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScaling(14),
  },
  messageNumber: {
    color: colors.white,
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scalingFontSize(6),
  },
  messageNumberContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    flexDirection: 'row',
    height: verticalScaling(10),
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    top: 12,
    width: horizontalScale(12),
  },
  userStoryContainer: {
    marginHorizontal: horizontalScale(28),
    marginTop: verticalScaling(20),
  },
});

export default globalStyles;
