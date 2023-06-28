import { Component, OnInit } from '@angular/core';
import { CursoInfo, Valoracion } from '../../interfaces/curso';
import { CursoService } from '../../services/curso.service';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info-curso',
  templateUrl: './info-curso.component.html',
  styleUrls: ['./info-curso.component.css'],
})
export class InfoCursoComponent implements OnInit {
  id: number;
  curso!: CursoInfo;
  loading: boolean = true;

  valoraciones: Valoracion[] = [];

  visible: boolean = false;

  valoracionForm: FormGroup = this.fb.group({
    comentario: '',
  });
  constructor(
    private cursoService: CursoService,
    private aRouter: ActivatedRoute,
    private carritoService: CarritoService,
    private fb: FormBuilder
  ) {
    this.id = Number(this.aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getCurso();
  }

  stars: number[] = [0, 1, 2, 3, 4]; // Array para representar las estrellas
  selectedStarIndex: number = -1; // Índice de la estrella seleccionada (-1 para ninguna estrella seleccionada)

  rateCourse(index: number): void {
    if (index === this.selectedStarIndex) {
      // Si se hace clic en la estrella seleccionada, se deselecciona
      this.selectedStarIndex = -1;
    } else {
      this.selectedStarIndex = index;
    }
  }

  onClick(curso: CursoInfo) {
    this.carritoService.addNewCurso(curso);
  }

  getCurso() {
    this.loading = true;
    this.cursoService.getCurso(this.id).subscribe((data) => {
      this.curso = data.curso;
      this.valoraciones = data.valoraciones;
      this.esEstudiante();
      this.loading = false;
    });
  }

  esEstudiante() {
    const usuarioString = localStorage.getItem('usuario');
    const usuario = usuarioString ? JSON.parse(usuarioString) : null;

    const usuarioId = usuario.usuario.id;
    this.cursoService.esEstudiante(usuarioId, this.id).subscribe((r) => {
      if (r.tiene_curso) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    });
  }
}
