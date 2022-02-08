import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';

import MovieScreen from '../screens/MovieScreen';
import SearchMovieScreen from '../screens/SearchMovieScreen';
import { RootStackParamList } from '../types/Navigation';
import BottomTabNavigator from './BottomTabNavigator';


const Stack = createNativeStackNavigator<RootStackParamList>();


type Props = {
  colorScheme: ColorSchemeName
}

const Navigation: React.FC<Props> = ({ colorScheme }) => {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="SearchMovie" component={SearchMovieScreen} options={{ title: 'Search Movie' }} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Movie" component={MovieScreen}  options={({ route }) => ({ title: route.params.movie.title })}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
