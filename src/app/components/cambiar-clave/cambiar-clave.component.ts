import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ValidatorsService } from 'src/app/services/validators.service';
import { PasswordValidator } from 'src/app/validators/password-validator.service';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css'],
})
export class CambiarClaveComponent {
  // servicios
  private validatorsService = inject(ValidatorsService);
  private usuarioService = inject(UsuarioService);
  private errorService = inject(ErrorService);

  // variables
  loading: boolean = true;

  public formCambiarClave: FormGroup = this.fb.group(
    {
      clave: ['', [Validators.required]],
      claveNueva: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          this.passwordValidator.validarContrasena(),
        ],
      ],
      claveNueva2: ['', [Validators.required]],
    },
    {
      validators: [
        this.passwordValidator.campoUnoIgualCampoDos(
          'claveNueva',
          'claveNueva2'
        ),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private passwordValidator: PasswordValidator
  ) {}

  getFieldError(field: string) {
    return this.validatorsService.getFieldError(this.formCambiarClave, field);
  }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.formCambiarClave, field);
  }

  cambiarClave() {
    if (this.formCambiarClave.invalid) {
      return this.formCambiarClave.markAllAsTouched();
    }

    const usuarioString = localStorage.getItem('usuario');
    const usuarioStorage = usuarioString ? JSON.parse(usuarioString) : null;

    const usuarioId = usuarioStorage.usuario.id;

    console.log(usuarioId);
    const clave = this.formCambiarClave.value['clave'];
    const claveNueva = this.formCambiarClave.value['claveNueva'];
    this.loading = true;
    this.usuarioService.cambiarClave(usuarioId, clave, claveNueva).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/perfil']);
        this.toastr.success('Tu contraseña ha sido modificada con éxito');
      },
      error: (e: HttpErrorResponse) => {
        this.errorService.msjError(e);
        this.loading = false;
      },
    });
  }
}
