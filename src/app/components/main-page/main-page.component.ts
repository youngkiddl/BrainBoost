import { Component, inject, OnInit } from '@angular/core';
import { Curso } from 'src/app/cursos/interfaces/curso';
import { CursoService } from 'src/app/cursos/services/curso.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public cursoService = inject(CursoService);
  public cursos: Curso[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos() {
    this.loading = true;
    this.cursoService.getCursos(1).subscribe((cursos) => {
      this.cursos = cursos;
      this.loading = false;
      console.log(this.cursos);
    });
  }
}
