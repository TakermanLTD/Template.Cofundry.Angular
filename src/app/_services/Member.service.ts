import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPaths } from 'src/app/_interceptors/Global';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getWatchedDates() {
    return this.http.get(ApiPaths.member + 'dates/watched');
  }

}
