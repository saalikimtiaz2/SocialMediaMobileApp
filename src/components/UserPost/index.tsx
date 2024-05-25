import colors from '@/styles/colors';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import UserProfileImage from '../UserProfileImage';
import styles from './styles';

type userPostPropsTypes = {
  firstName: string;
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookmarks: number;
};

const UserPost: FC<userPostPropsTypes> = ({
  firstName,
  lastName,
  location,
  likes,
  comments,
  bookmarks,
}) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.userContainer}>
        <UserProfileImage
          profileImage={require('@/assets/Images/default_profile.png')}
          imageDimensions={45}
        />
        <View style={styles.userDetailsContainer}>
          <View>
            <Text style={styles.username}>{firstName + ' ' + lastName}</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
          <FontAwesomeIcon icon={faEllipsis} color={colors.accent} size={24} />
        </View>
      </View>
      <Image
        style={styles.postImage}
        source={require('@/assets/Images/default_post.png')}
      />
      <View style={styles.reactionContainer}>
        <View style={styles.reactionWrapper}>
          <FontAwesomeIcon icon={faHeart} size={20} color={colors.accent} />
          <Text style={styles.reactionText}>{likes}</Text>
        </View>
        <View style={styles.reactionWrapper}>
          <FontAwesomeIcon icon={faComment} size={20} color={colors.accent} />
          <Text style={styles.reactionText}>{comments}</Text>
        </View>
        <View style={styles.reactionWrapper}>
          <FontAwesomeIcon icon={faBookmark} size={20} color={colors.accent} />
          <Text style={styles.reactionText}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
