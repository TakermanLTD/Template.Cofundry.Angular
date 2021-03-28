import { createAction, props } from '@ngrx/store';
import { Member } from 'src/app/_models/member.model';

export const login = createAction('[Login Page] Member Login', props<{ member: Member }>());
export const logout = createAction('[Top Menu] Logout');
export const register = createAction('[Register Page] Register', props<{ member: Member }>());
export const loadSession = createAction('[Login Page] Load Session', props<{ member: Member }>());

// export enum AuthActionTypes {
//   LOGIN = '[Auth] Login',
//   LOGIN_SUCCESS = '[Auth] Login Success',
//   LOGIN_FAILURE = '[Auth] Login Failure',
//   SIGNUP = '[Auth] Signup',
//   SIGNUP_SUCCESS = '[Auth] Signup Success',
//   SIGNUP_FAILURE = '[Auth] Signup Failure',
//   LOGOUT = '[Auth] Logout',
//   LOAD_SESSION = '[Auth] Load Session'
// }

// export class LogIn implements Action {
//   readonly type = AuthActionTypes.LOGIN;
//   constructor(public payload: any) { }
// }

// export class LogInSuccess implements Action {
//   readonly type = AuthActionTypes.LOGIN_SUCCESS;
//   constructor(public payload: any) { }
// }

// export class LogInFailure implements Action {
//   readonly type = AuthActionTypes.LOGIN_FAILURE;
//   constructor(public payload: any) { }
// }

// export class SignUp implements Action {
//   readonly type = AuthActionTypes.SIGNUP;
//   constructor(public payload: any) { }
// }

// export class SignUpSuccess implements Action {
//   readonly type = AuthActionTypes.SIGNUP_SUCCESS;
//   constructor(public payload: any) { }
// }

// export class SignUpFailure implements Action {
//   readonly type = AuthActionTypes.SIGNUP_FAILURE;
//   constructor(public payload: any) { }
// }

// export class LogOut implements Action {
//   readonly type = AuthActionTypes.LOGOUT;
// }

// export class LoadSession implements Action {
//   readonly type = AuthActionTypes.LOAD_SESSION;
// }

// export type All =
//   | LogIn
//   | LogInSuccess
//   | LogInFailure
//   | SignUp
//   | SignUpSuccess
//   | SignUpFailure
//   | LogOut
//   | LoadSession;
