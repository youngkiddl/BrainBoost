import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../interfaces/curso';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../interfaces/categoria';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css'],
})
export class CrearCursoComponent implements OnInit {
  fotoPrevisualizar!: any;
  fotoFile!: File;
  crearCursoForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    categoria: [0, [Validators.required]],
    descripcion: ['', [Validators.required]],
  });

  categorias: Categoria[] = [];

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private cursoService: CursoService
  ) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  cambiarFoto(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.fotoFile = <File>event.target.files[0];
      // imagen previa
      const reader = new FileReader();
      reader.onload = (e) => (this.fotoPrevisualizar = reader.result);
      reader.readAsDataURL(this.fotoFile);
    }
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  postCurso() {
    const usuarioString = localStorage.getItem('usuario');
    const usuario = usuarioString ? JSON.parse(usuarioString) : null;

    const usuarioId = usuario.usuario.id;
    const nuevoCurso = new FormData();
    nuevoCurso.append('nombre', this.crearCursoForm.value['nombre']),
      nuevoCurso.append('precio', this.crearCursoForm.value['precio']),
      nuevoCurso.append(
        'descripcion',
        this.crearCursoForm.value['descripcion']
      ),
      nuevoCurso.append('foto', this.fotoFile),
      nuevoCurso.append('instructorId', usuarioId);
    nuevoCurso.append('categoriaId', this.crearCursoForm.value['categoria']);

    this.cursoService.postCurso(nuevoCurso).subscribe(() => {
      console.log('curso creado');
    });
  }
}
