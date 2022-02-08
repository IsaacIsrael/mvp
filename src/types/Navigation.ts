
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import {  NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}


export type RootTabParamList = {
    FavoriteTab: undefined;
    BlacklistTab: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Movie: { movie: Movie, showActions?: boolean};
  SearchMovie: undefined;
};



export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;


export type Tab<T extends keyof RootTabParamList> =  React.FC<RootTabScreenProps<T>>;
export type Screen<T extends keyof RootStackParamList> =  React.FC<RootStackScreenProps<T>>;