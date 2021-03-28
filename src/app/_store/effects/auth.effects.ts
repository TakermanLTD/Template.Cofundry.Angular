import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthActions } from '../actions/action-types';
import { AuthService } from '../../_services/Auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
    private router: Router,
    private authService: AuthService) {
  }

  login$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.login),
        tap(action => localStorage.setItem('member', JSON.stringify(action.member)))
      ), { dispatch: false });

  logout$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.logout),
        tap(action => {
          localStorage.removeItem('user');
          this.router.navigateByUrl('/login');
        })
      )
    , { dispatch: false });

  loadSession$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.loadSession),
        tap(action => {
          this.authService.getSession().subscribe((member) => {
            localStorage.setItem('member', JSON.stringify(member));
            // localStorage.setItem('member', JSON.stringify(action.member));
          });
        })
      )
    , { dispatch: false });

  register$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.register),
        tap(action => {
          this.authService.register(action.member).subscribe((member) => {
            localStorage.setItem('member', JSON.stringify(member));
            // localStorage.setItem('member', JSON.stringify(action.member));
          });
        })
      )
    , { dispatch: false });
}
