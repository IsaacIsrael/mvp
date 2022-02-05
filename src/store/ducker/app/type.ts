import { AnyAction } from 'redux';
import { ActionRequest } from '../../../types/Request';

export type State = {
  requests: Record<string, ActionRequest>;
  failedRequests: Record<string, string>;
};

export interface Actions {
  RESET_STORE: 'RESET_STORE';
  REQUEST_STARTED: 'REQUEST_STARTED';
  REQUEST_SUCCEEDED: 'REQUEST_SUCCEEDED';
  REQUEST_FAILED: 'REQUEST_FAILED';
  REQUEST_FINISHED: 'REQUEST_FINISHED';
  REQUEST_FAILED_CLEAN: 'REQUEST_FAILED_CLEAN';
}

export interface ResetStore extends AnyAction {
  type: Actions['RESET_STORE'];
}

export interface RequestStarted extends AnyAction {
  type: Actions['REQUEST_STARTED'];
  action: AnyAction;
}

export interface RequestSucceeded extends AnyAction {
  type: Actions['REQUEST_SUCCEEDED'];
  action: AnyAction;
}

export interface RequestFailed extends AnyAction {
  type: Actions['REQUEST_FAILED'];
  action: AnyAction;
  error?: string;
}

export interface RequestFinished extends AnyAction {
  type: Actions['REQUEST_FINISHED'];
  action: AnyAction;
}

export interface RequestFailedClean extends AnyAction {
  type: Actions['REQUEST_FAILED_CLEAN'];
  action: string;
}

export interface Reducers {
  resetStore(): ResetStore;
  requestStarted(action: AnyAction): RequestStarted;
  requestSucceeded(action: AnyAction): RequestSucceeded;
  requestFailed(action: AnyAction, error?: string): RequestFailed;
  requestFinished(action: AnyAction): RequestFinished;
  requestFailedClean(action: string): RequestFailedClean;
}
