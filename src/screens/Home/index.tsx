import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

import {RootStackNavigatorParamsList} from '@/routes/RootStackNavigator';
import Styles from './styles';

const HomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

  const onHandlePress = () => {
    navigation.navigate('Profile');
  };
  return (
    <View>
      <Text style={Styles.title}>HomeScreen</Text>
      <Button onPress={() => onHandlePress()} title={'Profile'} />
    </View>
  );
};

export default HomeScreen;
