import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

import {RootStackNavigatorParamsList} from '../../router/RootStackNavigator';

const HomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

  const onHandlePress = () => {
    navigation.navigate('Profile');
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => onHandlePress()} title={'Profile'} />
    </View>
  );
};

export default HomeScreen;
