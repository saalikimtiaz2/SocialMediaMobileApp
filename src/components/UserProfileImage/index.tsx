import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

const UserProfileImage = ({
  profileImage,
  imageDimensions,
}: {
  profileImage: any;
  imageDimensions: number;
}) => {
  return (
    <View>
      <View style={[styles.imageContainer, {borderRadius: imageDimensions}]}>
        <Image
          source={profileImage}
          style={{width: imageDimensions, height: imageDimensions}}
        />
      </View>
    </View>
  );
};

export default UserProfileImage;
