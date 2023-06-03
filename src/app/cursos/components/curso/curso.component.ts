import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../interfaces/curso';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent implements OnInit {
  id: number;
  curso!: Curso;
  loading: boolean = true;
  videoFile!: File;

  videoForm: FormGroup = this.fb.group({
    titulo: '',
    descripcion: '',
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
      this.curso = data;
      this.loading = false;
    });
  }

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
