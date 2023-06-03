import { Component } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { ActivatedRoute } from '@angular/router';
import { CursoInstructor } from '../../interfaces/cursoInstructor';

@Component({
  selector: 'app-cursos-instructor',
  templateUrl: './cursos-instructor.component.html',
  styleUrls: ['./cursos-instructor.component.css'],
})
export class CursosInstructorComponent {
  id: number;
  cursos: CursoInstructor[] = [];
  loading: boolean = true;
  constructor(
    private cursoService: CursoService,
    private aRouter: ActivatedRoute
  ) {
    this.id = Number(this.aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos() {
    this.loading = true;
    this.cursoService.getCursoInstructor(this.id).subscribe((data) => {
      this.cursos = data;
      this.loading = false;
    });
  }
}
