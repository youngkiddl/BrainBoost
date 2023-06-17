import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Curso } from '../interfaces/curso';
import { CursoInstructor } from '../interfaces/cursoInstructor';
import { CursoCategoria } from '../interfaces/cursoCategoria';
import { Cursos } from '../interfaces/cursos';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getCursos(estado: number): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(`${this.BASE_URL}/cursos/${estado}`);
  }

  getCursoInstructor(id: number): Observable<CursoInstructor[]> {
    return this.http.get<CursoInstructor[]>(`${this.BASE_URL}/cursos/${id}`);
  }
  getCursosCategoria(id: number): Observable<CursoCategoria[]> {
    return this.http.get<CursoCategoria[]>(`${this.BASE_URL}/cursos/cat/${id}`);
  }

  getCurso(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.BASE_URL}/curso/${id}`);
  }

  postCurso(nuevoCurso: any) {
    return this.http.post(`${this.BASE_URL}/curso`, nuevoCurso);
  }

  postVideo(nuevoVideo: any, id: number) {
    return this.http.post(`${this.BASE_URL}/video/${id}`, nuevoVideo);
  }
}
