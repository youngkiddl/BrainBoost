import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Categoria } from '../../cursos/interfaces/categoria';
import { CarritoService } from 'src/app/cursos/services/carrito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  // servicios
  private categoriaService = inject(CategoriaService);
  private usuarioService = inject(UsuarioService);

  // variables
  loading: boolean = true;
  public usuario!: any;
  public categorias: Categoria[] = [];

  carrito: number = 0;

  constructor(private router: Router, private carritoService: CarritoService) {}
  ngOnDestroy(): void {
    location.reload();
  }

  ngOnInit(): void {
    this.getUsuario();
    this.categoriaService.getCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    });
    this.carritoService.cursos.subscribe((data) => {
      this.carrito = data.length;
      console.log(this.carrito);
    });
  }

  getUsuario() {
    const storedDataString = localStorage.getItem('usuario');

    this.loading = true;
    let storedData;
    if (storedDataString) {
      storedData = JSON.parse(storedDataString);
    }

    this.usuario = {
      id: storedData.usuario.id,
      nombre: storedData.usuario.nombre,
      fotografia: storedData.usuario.fotografia,
    };
    this.loading = false;
  }

  desconectarse() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
