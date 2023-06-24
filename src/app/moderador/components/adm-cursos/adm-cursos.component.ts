import { Component, OnInit } from '@angular/core';
import { Curso, CursoInfo } from 'src/app/cursos/interfaces/curso';
import { CursoService } from 'src/app/cursos/services/curso.service';
import { ModService } from '../../services/mod.service';
import { ToastrService } from 'ngx-toastr';
import { Cursos } from 'src/app/cursos/interfaces/cursos';

@Component({
  selector: 'app-adm-cursos',
  templateUrl: './adm-cursos.component.html',
  styleUrls: ['./adm-cursos.component.css'],
})
export class AdmCursosComponent implements OnInit {
  cursos: Cursos[] = [];
  curso!: CursoInfo;
  loading: boolean = true;
  constructor(
    private cursosService: CursoService,
    private modService: ModService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos() {
    this.cursosService.getCursos(0).subscribe((data) => {
      this.cursos = data;
      console.log(this.cursos);
    });
  }

  aprobarCurso(cursoId: number) {
    this.modService.aprobarCurso(cursoId).subscribe(() => {
      this.toastr.success('Curso aprobado con exito');
      this.getCursos();
    });
  }
}
