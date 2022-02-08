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

const  BlacklistTab: Tab<'BlacklistTab'> = () => {
  const blackList = useSelector<RootState,Movie[]>(({ movie})=>_.values(movie.blackList))

  const renderSearchResult: ListRenderItem<Movie> = ({item: movie}) =>(
    <CardMovie movie={movie} />
  )

  return (
    <Container>
      <FlatList 
        data={blackList}
        renderItem={renderSearchResult}
        keyExtractor={(item)=> item.id}
        ItemSeparatorComponent={() => <Divider  />}
        ListEmptyComponent={()=><Title>No Blacklist Movie!</Title>}
      />
    </Container>
  );
}

export default BlacklistTab;


