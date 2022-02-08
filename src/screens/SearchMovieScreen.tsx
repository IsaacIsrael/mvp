import React from 'react'
import { useState } from 'react';
import { Alert, ListRenderItem, StyleSheet, FlatList, ActivityIndicator, View } from 'react-native';
import Container from '../components/Container';
import SearchInput from '../components/inputs/SearchInput';

import { Screen } from '../types/Navigation';
import movieServices from '../services/movieServices';
import CardMovie from '../components/CardMovie';
import Divider from '../components/Divider';
import { Sizes } from '../helper/Sizes';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { Color } from '../helper/Color';



const styles = StyleSheet.create({
  input:{
    marginBottom: Sizes.GUTTER * 2
  },
  activeIndicator: {
    marginBottom: Sizes.GUTTER * 2
  }
});


const  SearchMovieScreen: Screen<'SearchMovie'> = ({ navigation })  => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searching, setSearching] = useState<boolean>(false);
  const blackList = useSelector<RootState,Record<string,Movie>>(({ movie})=> movie.blackList)

  const onSearch = async (value: string): Promise<void> =>{
    try{
      setSearching(true)
     
      const moviesUnfiltered = await  movieServices.fetchAll(value);
      const moviesFilter = moviesUnfiltered.filter((movies)=> !blackList[movies.id])
     
      setMovies(moviesFilter);
      setSearching(false)
    }catch(error){
      Alert.alert('Something wont wrong!!!');
    }
  }

  const renderSearchResult: ListRenderItem<Movie> = ({item: movie}) =>(
    <CardMovie movie={movie} showActions/>
  )

  return (
    <Container >
      <SearchInput placeholder='Search for a movie' onSearch={onSearch}  containerStyle={styles.input}/>
      <FlatList 
        data={movies}
        ListHeaderComponent={searching ? <ActivityIndicator  style={styles.activeIndicator} color={Color.WHITE}/>: <View />}
        renderItem={renderSearchResult}
        keyExtractor={(item: Movie)=> item.id}
        ItemSeparatorComponent={() => <Divider  />}
      />
    </Container>
  );
}

export default SearchMovieScreen

