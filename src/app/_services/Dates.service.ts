import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPaths } from 'src/app/_interceptors/Global';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(ApiPaths.dates);
  }

  getById(id: number) {
    return this.http.get(ApiPaths.dates + id);
  }
}
