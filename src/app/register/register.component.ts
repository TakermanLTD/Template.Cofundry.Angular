import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Member } from '../_models/member.model';
import { register } from '../_store/actions/auth.actions';
import { AppState } from '../_store/reducers/app.reducer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: Member;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.model = new Member();
  }

  onSubmit(): void {
    this.store.dispatch(register({ member: this.model }));
  }
}
