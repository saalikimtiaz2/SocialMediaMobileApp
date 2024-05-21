import {createStackNavigator} from '@react-navigation/stack';

export type RootStackNavigatorParamsList = {
  Home: undefined;
  Profile: undefined;
};

export const Stack = createStackNavigator<RootStackNavigatorParamsList>();
