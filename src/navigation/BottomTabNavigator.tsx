import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types/types';
import LinkingConfiguration from './LinkingConfiguration';


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
  

type FontAwesomeName= React.ComponentProps<typeof FontAwesome>['name'];

 const BottomTab = createBottomTabNavigator<RootTabParamList>();

 const BottomTabNavigator: React.FC = () => {
   const colorScheme = useColorScheme();


    const renderIcon  = (props: {name: FontAwesomeName; color: string;})  =>(
        <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />)
    ;
 
   return (
     <BottomTab.Navigator
       initialRouteName="TabOne"
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme].tint,
       }}
     >
       <BottomTab.Screen
         name="TabOne"
         component={TabOneScreen}
         options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
           title: 'Tab One',
           tabBarIcon: ({ color }) => renderIcon({ name:"code", color}),
           headerRight: () => (
             <Pressable
               onPress={() => navigation.navigate('Modal')}
               style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
             >
               <FontAwesome
                 name="info-circle"
                 size={25}
                 color={Colors[colorScheme].text}
                 style={{ marginRight: 15 }}
               />
             </Pressable>
           ),
         })}
       />
       <BottomTab.Screen
         name="TabTwo"
         component={TabTwoScreen}
         options={{
           title: 'Tab Two',
           tabBarIcon: ({ color }) => renderIcon({ name:"code", color}),
         }}
       />
     </BottomTab.Navigator>
   );
 }

 export default BottomTabNavigator;