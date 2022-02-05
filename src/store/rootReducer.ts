import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import { persistReducer } from 'redux-persist';

import appReducer, { Types as AppTypes, State as AppState } from './ducker/app';

export type RootState = {
  app: AppState;
};

const resettable = resettableReducer(AppTypes.RESET_STORE);

const rootReducer = combineReducers({
  app: resettable(appReducer),
});

const persistConfig = {
  key: 'LIFTED_REDUX_STORE',
  storage: AsyncStorageLib,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
