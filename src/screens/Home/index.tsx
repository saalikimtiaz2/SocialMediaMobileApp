import colors from '@/styles/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Title from '../../components/Title';

import UserStory from '@/components/UserStory';
import {RootStackNavigatorParamsList} from '@/routes/RootStackNavigator';
import globalStyles from '@/styles/globalStyles';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const HomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

  const onHandlePress = () => {
    navigation.navigate('Messages');
  };

  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('@/assets/Images/default_profile.png'),
    },
    {
      firstName: 'Olive',
      id: 2,
      profileImage: require('@/assets/Images/default_profile.png'),
    },
    {
      firstName: 'Alex',
      id: 3,
      profileImage: require('@/assets/Images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 4,
      profileImage: require('@/assets/Images/default_profile.png'),
    },
    {
      firstName: 'Natalia',
      id: 5,
      profileImage: require('@/assets/Images/default_profile.png'),
    },
    {
      firstName: 'Jhon',
      id: 6,
      profileImage: require('@/assets/Images/default_profile.png'),
    },
    {
      firstName: 'Doe',
      id: 7,
      profileImage: require('@/assets/Images/default_profile.png'),
    },
    {
      firstName: 'Dwayne',
      id: 8,
      profileImage: require('@/assets/Images/default_profile.png'),
    },
    {
      firstName: 'Roman',
      id: 9,
      profileImage: require('@/assets/Images/default_profile.png'),
    },
  ];

  return (
    <View>
      {/* --------------- Header Section --------------- */}
      <View style={globalStyles.header}>
        <Title text={`Let's Explore`} />
        <TouchableOpacity
          style={globalStyles.messageIcon}
          onPress={() => onHandlePress()}>
          <FontAwesomeIcon icon={faEnvelope} color={colors.accent} size={20} />
          <View style={globalStyles.messageNumberContainer}>
            <Text style={globalStyles.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* --------------- User Stories Section --------------- */}
      <View style={globalStyles.userStoryContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStories}
          renderItem={({item}) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
