import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private miUrlBase: string = environment.BASE_URL;
  constructor(private http: HttpClient) {}

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.miUrlBase}/usuario/${id}`);
  }

  modificarUsuario(id: number, usuario: any, fotografia: File): Observable<void> {
    return this.http.patch<void>(`${this.miUrlBase}/modificar`, { usuario, id, fotografia });
  }
}
