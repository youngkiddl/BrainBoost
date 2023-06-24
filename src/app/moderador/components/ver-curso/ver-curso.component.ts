import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoInfo } from 'src/app/cursos/interfaces/curso';
import { CursoService } from 'src/app/cursos/services/curso.service';

@Component({
  selector: 'app-ver-curso',
  templateUrl: './ver-curso.component.html',
  styleUrls: ['./ver-curso.component.css'],
})
export class VerCursoComponent implements OnInit {
  id: number;
  loading: boolean = true;
  curso!: CursoInfo;

  constructor(
    private aRouter: ActivatedRoute,
    private cursoService: CursoService
  ) {
    this.id = Number(this.aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getInfoCurso(this.id);
  }

  getInfoCurso(cursoId: number) {
    this.loading = true;
    this.cursoService.getCurso(cursoId).subscribe((data) => {
      this.curso = data.curso;
      this.loading = false;
      console.log(this.curso);
    });
  }
}
