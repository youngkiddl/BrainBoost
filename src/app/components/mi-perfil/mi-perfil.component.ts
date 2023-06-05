import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css'],
})
export class MiPerfilComponent implements OnInit {
  // servicios
  private usuarioService = inject(UsuarioService);
  // variables
  public loading: boolean = true;
  public usuario!: Usuario;

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    const usuarioString = localStorage.getItem('usuario');
    const usuario = usuarioString ? JSON.parse(usuarioString) : null;

    const usuarioId = usuario.usuario.id;

    this.loading = true;
    this.usuarioService.getUsuario(usuarioId).subscribe((usuario) => {
      this.usuario = usuario;
      this.loading = false;
    });
  }
}
