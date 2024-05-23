import React from 'react';
import {Text, View} from 'react-native';
import UserProfileImage from '../UserProfileImage';
import styles from './styles';

const UserStory = ({
  firstName,
  profileImage,
}: {
  firstName: string;
  profileImage: any;
}) => {
  return (
    <View style={styles.storyContainer}>
      <UserProfileImage profileImage={profileImage} imageDimensions={65} />
      <Text style={styles.userName}>{firstName}</Text>
    </View>
  );
};

export default UserStory;
