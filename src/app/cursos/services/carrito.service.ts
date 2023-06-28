import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CursoInfo } from '../interfaces/curso';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private cursosCarrito: CursoInfo[] = [];

  private BASE_URL = environment.BASE_URL;

  private _cursos: BehaviorSubject<CursoInfo[]> = new BehaviorSubject<
    CursoInfo[]
  >([]);

  constructor(private http: HttpClient) {}

  get cursos() {
    return this._cursos.asObservable();
  }

  addNewCurso(curso: CursoInfo) {
    this.cursosCarrito.push(curso);
    this._cursos.next(this.cursosCarrito);
  }

  deleteCurso(index: number) {
    this.cursosCarrito.splice(index, 1);
    this._cursos.next(this.cursosCarrito);
  }

  vaciarCarrito() {
    this.cursosCarrito = [];
    this._cursos.next(this.cursosCarrito);
  }

  comprar(data: any) {
    return this.http.post(`${this.BASE_URL}/comprar`, data);
  }
}
