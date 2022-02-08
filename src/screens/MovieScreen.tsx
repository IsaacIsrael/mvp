import React from 'react'
import { Image, StyleSheet } from 'react-native';
import {  Screen } from '../types/Navigation';
import Container from '../components/Container';
import Body from '../components/text/Body';
import { Sizes } from '../helper/Sizes';
import System from '../helper/System';
import BottomContainer from '../components/BottomContainer';
import Button from '../components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import  { Types as MovieTypes, Creators as movieReducer } from '../store/ducker/movie';
import { RootState } from '../store';
import { FontAwesome } from '@expo/vector-icons';


const styles = StyleSheet.create({
  container:{
    paddingBottom: Sizes.GUTTER * 10,
  },
  image:{
    width: System.windowWidth * 0.8,
    aspectRatio: 0.7,
    alignSelf: 'center',
  },
  content:{
      marginTop: Sizes.GUTTER
  },
  rate:{
    marginTop: Sizes.GUTTER,
  },
  body:{
    marginTop: Sizes.GUTTER * 0.5
  },
  addButton:{
    marginBottom: Sizes.GUTTER,
  }
});



const MovieScreen: Screen<'Movie'> = ({ route }) => {
  const { movie, showActions } = route.params
  const isFavorites = useSelector<RootState,boolean>((state)=> !!state.movie.favorites[movie.id])
  const dispatch = useDispatch();

  const onAddFavoritePress = (): void =>{
    dispatch(movieReducer.addFavorite(movie));
  }

  const onAddBlacklistPress = (): void =>{
    dispatch(movieReducer.addBlacklist(movie));
  }

  const renderFooter = () =>(
    <BottomContainer>
      <Button title='Add to favorites' style={styles.addButton} onPress={onAddFavoritePress}/>
      <Button title='Add to blacklist' type="outlined" onPress={onAddBlacklistPress} />
   </BottomContainer>
  )

  return (
    <Container scroll footerComponent={showActions && renderFooter} style={styles.container}>
      <Image  style={styles.image} source={{ uri: movie.image}}/>
      <Body style={styles.rate}>{isFavorites && <FontAwesome  name="heart" size={15}/> }{`  Rate:${movie.imDbRating || 'No rating'}`}</Body>
      <Body style={styles.body}>{movie.plot}</Body>
    </Container>
  );
}

export default MovieScreen;


