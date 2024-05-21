import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './RootStackNavigator';

import React from 'react';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';

function Router(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
