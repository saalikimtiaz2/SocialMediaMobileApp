/* eslint-disable react-hooks/exhaustive-deps */
import colors from '@/styles/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Title from '../../components/Title';

import UserStory from '@/components/UserStory';
import {RootStackNavigatorParamsList} from '@/routes/RootStackNavigator';
import globalStyles from '@/styles/globalStyles';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

type userStoryTypes = {
  firstName: string;
  id: number;
  profileImage: any;
};

const HomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

  const onHandlePress = () => {
    navigation.navigate('Messages');
  };

  const userStories: userStoryTypes[] = [
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

  const userStoriesPageSize = 4;

  /* --------------- Local States --------------- */

  const [userStoriesCurrentPage, setUserStoriesCurrentPage] =
    useState<number>(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<
    userStoryTypes[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] =
    useState<boolean>(false);

  /* --------------- Custom Functions --------------- */

  const pagination = (
    database: userStoryTypes[],
    currentPage: number,
    pageSize: number,
  ) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  const loadMoreStories = () => {
    if (isLoadingUserStories) return;
    setIsLoadingUserStories(true);
    const nextPage = userStoriesCurrentPage + 1;
    const contentToAppend = pagination(
      userStories,
      nextPage,
      userStoriesPageSize,
    );
    if (contentToAppend.length > 0) {
      setUserStoriesCurrentPage(nextPage);
      setUserStoriesRenderedData(prevStories => [
        ...prevStories,
        ...contentToAppend,
      ]);
    }
    setIsLoadingUserStories(false);
  };

  /* --------------- useEffects --------------- */

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData: userStoryTypes[] = pagination(
      userStories,
      1,
      userStoriesPageSize,
    );
    setUserStoriesRenderedData([...getInitialData]);
    setIsLoadingUserStories(false);
  }, []);

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
          onEndReachedThreshold={0.5}
          onEndReached={() => loadMoreStories()}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStoriesRenderedData}
          renderItem={({item}) => (
            <UserStory
              key={'userStory' + item.id}
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
