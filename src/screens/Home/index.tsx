import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';

import {RootStackNavigatorParamsList} from '@/routes/RootStackNavigator';

const HomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

  const onHandlePress = () => {
    navigation.navigate('Profile');
  };
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Title text={`Let's Explore`} />
        <Pressable style={styles.messageBtn} onPress={() => onHandlePress()}>
          <Text>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
