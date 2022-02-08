import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from 'react-native';
import { Color } from '../helper/Color';

import TabOneScreen from '../screens/FavoriteTab';
import TabTwoScreen from '../screens/BlacklistTab';
import { FontAwesomeName } from '../types/Icon';
import {  RootTabParamList, RootTabScreenProps } from '../types/Navigation';




 const BottomTab = createBottomTabNavigator<RootTabParamList>();

 const BottomTabNavigator: React.FC = () => {

    const renderIcon  = (props: {name: FontAwesomeName; color: string;})  =>(
      <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />)
    ;
 
   return (
     <BottomTab.Navigator
       initialRouteName="FavoriteTab"
       screenOptions={{
         tabBarActiveTintColor: Color.WHITE,
       }}
     >
       <BottomTab.Screen
         name="FavoriteTab"
         component={TabOneScreen}
         options={({ navigation }: RootTabScreenProps<'FavoriteTab'>) => ({
           title: 'Favorite',
           tabBarIcon: ({ color }) => renderIcon({ name:"heart", color}),
           headerRight: () => (
             <Pressable
               onPress={() => navigation.navigate('SearchMovie')}
               style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
             >
               <FontAwesome
                 name="search"
                 size={20}
                 color={Color.WHITE}
                 style={{ marginRight: 15 }}
               />
             </Pressable>
           ),
         })}
       />
       <BottomTab.Screen
         name="BlacklistTab"
         component={TabTwoScreen}
         options={({ navigation }: RootTabScreenProps<'BlacklistTab'>) => ({
            title: 'Blacklist',
            tabBarIcon: ({ color }) => renderIcon({ name:"ban", color}),
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('SearchMovie')}
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
              >
                <FontAwesome
                  name="search"
                  size={20}
                  color={Color.WHITE}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
        })}
       />
     </BottomTab.Navigator>
   );
 }

 export default BottomTabNavigator;