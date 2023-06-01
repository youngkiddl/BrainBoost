import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.BASE_URL}/cursos`);
  }

  postCurso() {
    return this.http.post;
  }
}
