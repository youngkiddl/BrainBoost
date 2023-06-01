import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../interfaces/usuarioLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  login(usuario: UsuarioLogin): Observable<string> {
    return this.http.post<string>(`${this.url}/api/login`, usuario);
  }
}
