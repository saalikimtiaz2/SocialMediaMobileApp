import colors from '@/styles/colors';
import styles from '@/styles/globalStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Title from '../../components/Title';

import {RootStackNavigatorParamsList} from '@/routes/RootStackNavigator';
import globalStyles from '@/styles/globalStyles';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const HomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

  const onHandlePress = () => {
    navigation.navigate('Profile');
  };
  return (
    <View>
      <View style={styles.header}>
        <Title text={`Let's Explore`} />
        <TouchableOpacity
          style={styles.messageIcon}
          onPress={() => onHandlePress()}>
          <FontAwesomeIcon icon={faEnvelope} color={colors.accent} size={20} />
          <View style={globalStyles.messageNumberContainer}>
            <Text style={globalStyles.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
