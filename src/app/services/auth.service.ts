import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3001'
  constructor(private http: HttpClient) { }

  login(usuario: any) {
    this.http.post(`${this.url}/api/login`, usuario)
  }
}
