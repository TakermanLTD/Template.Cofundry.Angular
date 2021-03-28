import { Member } from 'src/app/_models/member.model';

export interface AuthState {
  member: Member | null;
  // isAuthenticated: boolean;
  // errorMessage: string | null;
}

export const initialAuthState: AuthState = {
  // isAuthenticated: false,
  member: null
  // errorMessage: null
};
