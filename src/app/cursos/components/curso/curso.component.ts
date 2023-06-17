import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { ActivatedRoute } from '@angular/router';
import { Curso, CursoInfo, Valoracion } from '../../interfaces/curso';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent implements OnInit {
  id: number;
  curso!: CursoInfo;
  loading: boolean = true;
  videoFile!: File;

  valoraciones: Valoracion[] = [];

  videoForm: FormGroup = this.fb.group({
    titulo: '',
    descripcion: '',
  });

  valoracionForm: FormGroup = this.fb.group({
    comentario: '',
  });
  constructor(
    private cursoService: CursoService,
    private aRouter: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.id = Number(this.aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getCurso();
  }

  cambiarVideo(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.videoFile = <File>event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.videoFile);
    }
  }

  getCurso() {
    this.loading = true;
    this.cursoService.getCurso(this.id).subscribe((data) => {
      this.curso = data.curso;
      this.valoraciones = data.valoraciones;
      this.loading = false;
    });
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

  postValoracion() {}

  subirVideo() {
    const nuevoVideo = new FormData();
    nuevoVideo.append('titulo', this.videoForm.value['titulo']),
      nuevoVideo.append('descripcion', this.videoForm.value['descripcion']),
      nuevoVideo.append('video', this.videoFile);

    this.cursoService.postVideo(nuevoVideo, this.id).subscribe(() => {
      console.log('video agregado');
      this.videoForm.reset();
      this.getCurso();
    });
  }
}
