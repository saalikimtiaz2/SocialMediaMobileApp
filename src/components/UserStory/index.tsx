import React from 'react';
import {Image, Text, View} from 'react-native';
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
      <View style={styles.imageContainer}>
        <Image source={profileImage} />
      </View>
      <Text style={styles.userName}>{firstName}</Text>
    </View>
  );
};

export default UserStory;
