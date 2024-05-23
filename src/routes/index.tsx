import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './RootStackNavigator';

import React from 'react';

import HomeScreen from '@/screens/Home';
import Messages from '@/screens/Messages';

function Router(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Messages" component={Messages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
