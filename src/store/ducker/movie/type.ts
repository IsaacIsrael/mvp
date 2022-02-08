import { AnyAction } from 'redux';

export type State = {
  favorites: Record<string, Movie>;
  blackList: Record<string, Movie>;
};

export interface Actions {
  ADD_FAVORITE: 'ADD_FAVORITE';
  ADD_BLACKLIST: 'ADD_BLACKLIST';
}

export interface AddFavorite extends AnyAction {
  type: Actions['ADD_FAVORITE'];
  movie: Movie,
}

export interface AddBlacklist extends AnyAction {
  type: Actions['ADD_BLACKLIST'];
  movie: Movie,
}

export interface Reducers {
  addFavorite(movie: Movie): AddFavorite;
  addBlacklist(movie: Movie): AddBlacklist;
}
