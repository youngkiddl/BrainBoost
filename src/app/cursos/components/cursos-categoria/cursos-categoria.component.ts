import { Component, OnInit } from '@angular/core';
import { CursoCategoria } from '../../interfaces/cursoCategoria';
import { CursoService } from '../../services/curso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-categoria',
  templateUrl: './cursos-categoria.component.html',
  styleUrls: ['./cursos-categoria.component.css'],
})
export class CursosCategoriaComponent implements OnInit {
  cursos: CursoCategoria[] = [];
  categoria: string = '';
  id: number;
  loading: boolean = true;
  mensajeNoCursos: string = '';

  constructor(
    private cursoService: CursoService,
    private aRouter: ActivatedRoute
  ) {
    this.id = Number(this.aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getCursosCategoria();
  }

  getCursosCategoria() {
    this.loading = true;
    this.mensajeNoCursos = '';
    this.cursoService.getCursosCategoria(this.id).subscribe((data) => {
      if (data.length > 1) {
        this.mensajeNoCursos = '';
        this.cursos = data;
        this.categoria = data[0].categoria[0].nombre;
        this.loading = false;
      } else {
        this.mensajeNoCursos = 'No hay cursos disponibles para esta categoria';
        this.cursos = data;
        this.loading = false;
      }
    });
  }
}
