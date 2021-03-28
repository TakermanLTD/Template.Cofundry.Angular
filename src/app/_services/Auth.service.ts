import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPaths } from 'src/app/_interceptors/Global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getSession() {
    return this.http.get(ApiPaths.auth + 'session');
  }

  login(command) {
    return this.http.post(ApiPaths.auth + 'login', command).pipe(this.getSession);
  }

  register(command) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origins': '*' }) };
    return this.http.post(ApiPaths.auth + 'register', command, httpOptions); // .pipe(this.getSession);
  }

  signOut() {
    return this.http.post(ApiPaths.auth + 'sign-out', {}).pipe(this.getSession);
  }

  loadSession(context) {
    return this.getSession().subscribe(member => {
      context.commit('member', member);
    });
  }
}
