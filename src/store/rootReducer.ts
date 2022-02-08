import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import movieReducer, { Types as MovieTypes, State as MovieState } from './ducker/movie';

export type RootState = {
  movie: MovieState;
};


const rootReducer = combineReducers({
  movie: movieReducer,
});

const persistConfig = {
  key: 'LIFTED_REDUX_STORE',
  storage: AsyncStorageLib,
  whitelist: ['movie'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
