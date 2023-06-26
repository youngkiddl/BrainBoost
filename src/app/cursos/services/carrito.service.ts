import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CursoInfo } from '../interfaces/curso';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private cursosCarrito: CursoInfo[] = [];

  private _cursos: BehaviorSubject<CursoInfo[]> = new BehaviorSubject<
    CursoInfo[]
  >([]);

  constructor() {}

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
}
