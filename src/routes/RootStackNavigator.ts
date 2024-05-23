import {createStackNavigator} from '@react-navigation/stack';

export type RootStackNavigatorParamsList = {
  Home: undefined;
  Messages: undefined;
};

export const Stack = createStackNavigator<RootStackNavigatorParamsList>();
