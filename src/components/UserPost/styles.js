import {getFontFamily} from '@/assets/Fonts/helper';
import colors from '@/styles/colors';
import {horizontalScale, verticalScaling} from '@/styles/scaling';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  location: {
    color: colors.accent,
    fontSize: 8,
  },
  postContainer: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    marginHorizontal: 24,
    marginTop: 30,
    paddingBottom: 20,
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
    marginTop: 16,
  },
  reactionText: {
    color: colors.accent,
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 14,
  },
  reactionWrapper: {flexDirection: 'row', gap: 3},
  userContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
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
    fontSize: 16,
    textAlign: 'left',
  },
});

export default styles;
