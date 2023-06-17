import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../interfaces/curso';
import { Cursos } from '../../interfaces/cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: Cursos[] = [];
  loading: boolean = true;

  constructor(private cursosService: CursoService) {}

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos() {
    this.loading = true;
    this.cursosService.getCursos(1).subscribe((data) => {
      this.cursos = data;
      this.loading = false;
      console.log(this.cursos);
    });
  }
}
