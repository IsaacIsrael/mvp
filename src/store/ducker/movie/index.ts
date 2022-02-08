import { createActions, createReducer } from 'reduxsauce';
import _ from 'lodash';
import { Actions, Reducers, State, AddFavorite, AddBlacklist } from './type';

// Create Initial state
export type { State };

const INITIAL_STATE: State = {
  favorites: {},
  blackList: {},
};



// Create action Types and Creators
export const { Types, Creators } = createActions<Actions, Reducers>({
  addFavorite: ['movie'],
  addBlacklist: ['movie'],
});


// Create Reducer
const addFavorite = (state = INITIAL_STATE, { movie }: AddFavorite): State => {
  const favorites = _.cloneDeep(state.favorites);
  favorites[movie.id] = movie

  return {
    ...state,
    favorites,
  };
};

const addBlacklist = (state = INITIAL_STATE, { movie }: AddBlacklist): State => {
  const blackList = _.cloneDeep(state.blackList);
  blackList[movie.id] = movie

  return {
    ...state,
    blackList,
  };
};


export default createReducer<State>(INITIAL_STATE, {
  [Types.ADD_FAVORITE]: addFavorite,
  [Types.ADD_BLACKLIST]: addBlacklist,
});
