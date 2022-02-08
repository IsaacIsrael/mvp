import React from 'react'
import { FlatList, ListRenderItem } from 'react-native';
import Container from '../components/Container';
import CardMovie from '../components/CardMovie';

import { Tab } from '../types/Navigation';
import Divider from '../components/Divider';
import Title from '../components/text/Title';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import _ from 'lodash';
import WifiAlert from '../components/WifiAlert';

const  FavoriteTab: Tab<'FavoriteTab'> = () => {
  const favorites = useSelector<RootState,Movie[]>(({ movie})=>_.values(movie.favorites))

  const renderSearchResult: ListRenderItem<Movie> = ({item: movie}) =>(
    <CardMovie movie={movie} />
  )

  return (
    <Container>
       
      <FlatList 
        data={favorites}
        renderItem={renderSearchResult}
        keyExtractor={(item)=> item.id}
        ItemSeparatorComponent={() => <Divider  />}
        ListEmptyComponent={()=><Title>No Favorite Movie!</Title>}
      />
    </Container>
  );
}

export default FavoriteTab;


