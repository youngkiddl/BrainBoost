import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CursoInstructor } from 'src/app/cursos/interfaces/cursoInstructor';
import { CursoService } from 'src/app/cursos/services/curso.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-mi-perfil-cursos',
  templateUrl: './mi-perfil-cursos.component.html',
  styleUrls: ['./mi-perfil-cursos.component.css'],
})
export class MiPerfilCursosComponent implements OnInit {
  cursos: CursoInstructor[] = [];
  public usuario!: any;
  loading: boolean = true;

  constructor(
    private cursoService: CursoService,
    private usuarioService: UsuarioService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUsuarioAndCursos();
  }

  getUsuarioAndCursos() {
    const usuarioString = localStorage.getItem('usuario');
    const usuario = usuarioString ? JSON.parse(usuarioString) : null;

    const usuarioId = usuario.usuario.id;

    this.loading = true;

    this.usuarioService.getUsuario(usuarioId).subscribe((usuario) => {
      this.usuario = usuario;

      this.cursoService.getMisCursosInstructor(usuarioId).subscribe((data) => {
        this.cursos = data;
        this.loading = false;
      });
    });
  }

  cambiarEstadoCurso(cursoId: number) {
    this.cursoService.cambiarEstadoCurso(cursoId).subscribe(() => {
      this.toastr.success('Curso actualizado con exito');
      this.getUsuarioAndCursos();
    });
  }
}
