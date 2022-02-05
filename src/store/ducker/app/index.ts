import { createActions, createReducer, createTypes } from 'reduxsauce';
import _ from 'lodash';
import { Actions, Reducers, RequestFailed, RequestFailedClean, RequestFinished, RequestStarted, State } from './type';

// Create Initial state
export type { State };

const INITIAL_STATE: State = {
  requests: {},
  failedRequests: {},
};



// Create action Types and Creators
export const { Types, Creators } = createActions<Actions, Reducers>({
  resetStore: null,
  requestStarted: ['action'],
  requestSucceeded: ['action'],
  requestFailed: ['action', 'error'],
  requestFinished: ['action'],
  requestFailedClean: ['action'],
});


// Create Reducer
const requestStarted = (state = INITIAL_STATE, { action }: RequestStarted): State => {
  const requests = _.cloneDeep(state.requests);
  requests[action.type] = {
    action,
    status: 'loading',
  };

  return {
    ...state,
    requests,
  };
};

const requestSucceeded = (state = INITIAL_STATE, { action }: RequestFailed): State => {
  const requests = _.cloneDeep(state.requests);
  requests[action.type] = {
    action,
    status: 'succeeded',
  };

  return {
    ...state,
    requests,
  };
};

const requestFailed = (state = INITIAL_STATE, { action, error }: RequestFailed): State => {
  const requests = _.cloneDeep(state.requests);
  requests[action.type] = {
    action,
    status: 'failed',
  };

  const failedRequests = _.cloneDeep(state.failedRequests);

  if (error) {
    failedRequests[action.type] = error;
  }

  return {
    ...state,
    requests,
    failedRequests,
  };
};

const requestFinished = (state = INITIAL_STATE, { action }: RequestFinished): State => {
  const requests = _.cloneDeep(state.requests);
  delete requests[action.type];

  return {
    ...state,
    requests,
  };
};

const requestFailedClean = (state = INITIAL_STATE, { action }: RequestFailedClean): State => {
  const failedRequests = _.cloneDeep(state.failedRequests);
  delete failedRequests[action];

  return {
    ...state,
    failedRequests,
  };
};

export default createReducer<State>(INITIAL_STATE, {
  [Types.REQUEST_STARTED]: requestStarted,
  [Types.REQUEST_SUCCEEDED]: requestSucceeded,
  [Types.REQUEST_FAILED]: requestFailed,
  [Types.REQUEST_FINISHED]: requestFinished,
  [Types.REQUEST_FAILED_CLEAN]: requestFailedClean,
});
