import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CursoInfo } from 'src/app/cursos/interfaces/curso';
import { CarritoService } from 'src/app/cursos/services/carrito.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css'],
})
export class CarritoComprasComponent implements OnInit {
  cursos: CursoInfo[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.cursos.subscribe((data) => {
      this.cursos = data;
    });
    this.calcularTotal();
  }

  onClick(indice: number) {
    this.carritoService.deleteCurso(indice);
  }

  calcularTotal() {
    this.carritoService.cursos
      .pipe(
        map((cursos) => {
          return cursos.reduce((prev, curr) => prev + curr.precio, 0);
        })
      )
      .subscribe((val) => {
        this.total = val;
      });
  }
}
