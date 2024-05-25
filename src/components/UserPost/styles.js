import {getFontFamily} from '@/assets/Fonts/helper';
import colors from '@/styles/colors';
import {
  horizontalScale,
  scalingFontSize,
  verticalScaling,
} from '@/styles/scaling';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  location: {
    color: colors.accent,
    fontSize: scalingFontSize(10),
  },
  postContainer: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScaling(30),
    paddingBottom: verticalScaling(20),
  },
  postImage: {
    flex: 1,
    height: horizontalScale(188),
    justifyContent: 'center',
    resizeMode: 'cover',
    width: verticalScaling(235),
  },

  reactionContainer: {
    flexDirection: 'row',
    gap: 27,
    marginTop: verticalScaling(16),
  },
  reactionText: {
    color: colors.accent,
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scalingFontSize(14),
  },
  reactionWrapper: {flexDirection: 'row', gap: 3},
  userContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: verticalScaling(16),
  },
  userDetailsContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    color: colors.black,
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scalingFontSize(16),
    textAlign: 'left',
  },
});

export default styles;
