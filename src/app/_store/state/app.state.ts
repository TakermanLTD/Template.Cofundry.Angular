import { createFeatureSelector } from '@ngrx/store';
import { authReducer } from '../reducers/auth.reducer';
import { AuthState } from './auth.state';

export interface AppState {
  authState: AuthState;
}

export const reducers = {
  auth: authReducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
