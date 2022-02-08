import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View } from 'react-native';
import { Sizes } from '../helper/Sizes';
import Row from './Row';
import Body from './text/Body';
import Small from './text/Small';
import Title from './text/Title';
import Touchable from './button/Touchable';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
    image:{
        width: '30%', 
        aspectRatio: 0.7,
    },
    content:{
        flex: 1,
        marginLeft: Sizes.GUTTER * 0.5
    },
    body:{
        marginTop: Sizes.GUTTER * 0.5
    }
});

type Props ={
    movie: Movie;
    showActions?: boolean;
}

const CardMovie: React.FC<Props> =({movie, showActions}) => {
    const navigation = useNavigation();
    const isFavorites = useSelector<RootState,boolean>((state)=> !!state.movie.favorites[movie.id])

    const onCardPress = () =>{
      navigation.navigate('Movie', {
        movie: movie,
        showActions
      } )
    }

    return (
        <Touchable onPress={onCardPress}>
            <Row>
                <Image  style={styles.image} source={{ uri: movie.image}}/>
                <View  style={styles.content}>
                    <Title>
                        {isFavorites && <FontAwesome  name="heart" size={15}/> }
                        {`  ${movie.title}`}
                    </Title>
                    <Small>Rate: {movie.imDbRating || 'No rating'}</Small>
                    <Body style={styles.body}>{movie.plot}</Body>
                </View>
            </Row>
        </Touchable>
    )
}

export default CardMovie;
