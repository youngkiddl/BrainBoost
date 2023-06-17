import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { PerfilInstructor } from '../interfaces/perfilInstructor';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private miUrlBase: string = environment.BASE_URL;
  constructor(private http: HttpClient) {}

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.miUrlBase}/usuario/${id}`);
  }

  getInstructor(id: number): Observable<PerfilInstructor> {
    return this.http.get<PerfilInstructor>(
      `${this.miUrlBase}/instructor/${id}`
    );
  }

  modificarUsuario(usuario: any): Observable<void> {
    return this.http.patch<void>(`${this.miUrlBase}/modificar`, usuario);
  }

  registrarUsuario(usuario: any): Observable<void> {
    return this.http.post<void>(`${this.miUrlBase}/registro`, usuario);
  }

  cambiarClave(id: number, clave: string, claveNueva: string) {
    return this.http.patch(`${this.miUrlBase}/cambiarClave`, {
      id,
      clave,
      claveNueva,
    });
  }
}
