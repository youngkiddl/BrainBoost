import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../interfaces/curso';

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
  });

  usuario: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario');
    console.log(this.usuario);
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
}
