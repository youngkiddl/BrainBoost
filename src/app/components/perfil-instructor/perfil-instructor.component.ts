import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilInstructor } from 'src/app/interfaces/perfilInstructor';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil-instructor',
  templateUrl: './perfil-instructor.component.html',
  styleUrls: ['./perfil-instructor.component.css'],
})
export class PerfilInstructorComponent implements OnInit {
  instructor!: PerfilInstructor;
  id: number;
  loading: boolean = true;

  constructor(
    private usuarioService: UsuarioService,
    private aRouter: ActivatedRoute
  ) {
    this.id = Number(this.aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getPerfil();
  }

  getPerfil() {
    this.loading = true;
    this.usuarioService.getInstructor(this.id).subscribe((data) => {
      this.instructor = data;
      console.log(this.instructor);
      this.loading = false;
    });
  }
}
