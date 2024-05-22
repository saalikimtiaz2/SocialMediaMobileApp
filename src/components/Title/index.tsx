import React from 'react';
import {Text, View} from 'react-native';
import Styles from './styles';

const Title = ({text: text}: {text: string}) => {
  return (
    <View>
      <Text style={Styles.title}>{text}</Text>
    </View>
  );
};

export default Title;
