import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/action-types';
import { initialAuthState } from '../state/auth.state';

export const authReducer = createReducer(

  initialAuthState,

  on(AuthActions.login, (state, action) => {
    return {
      member: action.member
    };
  }),

  on(AuthActions.loadSession, (state, action) => {
    return {
      member: action.member
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      member: undefined
    };
  })
);

// export function authReducer(state = initialAuthState, action: All): AuthState {
//   switch (action.type) {
//     case AuthActionTypes.LOGIN_SUCCESS: {
//       return {
//         ...state,
//         isAuthenticated: true,
//         member: {
//           token: action.payload.token,
//           email: action.payload.email
//         },
//         errorMessage: null
//       };
//     }
//     case AuthActionTypes.LOGIN_FAILURE: {
//       return {
//         ...state,
//         errorMessage: 'Incorrect email and/or password.'
//       };
//     }
//     case AuthActionTypes.SIGNUP_SUCCESS: {
//       return {
//         ...state,
//         isAuthenticated: true,
//         member: {
//           token: action.payload.token,
//           email: action.payload.email
//         },
//         errorMessage: null
//       };
//     }
//     case AuthActionTypes.SIGNUP_FAILURE: {
//       return {
//         ...state,
//         errorMessage: 'That email is already in use.'
//       };
//     }
//     case AuthActionTypes.LOGOUT: {
//       return initialAuthState;
//     }
//     default: {
//       return state;
//     }
//   }
// }
