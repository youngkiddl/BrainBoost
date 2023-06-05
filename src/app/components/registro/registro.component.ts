import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  loading: boolean = true;

  public formRegistrar: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    clave: ['', [Validators.required]],
    clave2: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  registrar() {
    if (this.formRegistrar.invalid) {
      return this.formRegistrar.markAllAsTouched();
    }

    
  }
}
