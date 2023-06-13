import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CelularValidator } from 'src/app/validators/celular-validator.service';
import { PasswordValidator } from 'src/app/validators/password-validator.service';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  // servicios
  private usuarioService = inject(UsuarioService);
  private validatorsService = inject(ValidatorsService);
  private passwordValidator = inject(PasswordValidator);
  private celularValidator = inject(CelularValidator);

  // variables
  loading: boolean = true;
  fotoPrevisualizar!: any;
  fotoFile!: File;

  perfilesUsuario: { nombre: string }[] = [
    { nombre: 'estudiante' },
    { nombre: 'instructor' },
  ];

  public formRegistrar: FormGroup = this.fb.group(
    {
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorsService.emailPattern),
        ],
      ],
      perfil: [0, [Validators.required]],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
      telefono: [
        '',
        [
          Validators.required,
          Validators.maxLength(9),
          this.celularValidator.celularChilenoValidator(),
        ],
      ],
      pais: ['', [Validators.required, Validators.minLength(3)]],
      clave: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          this.passwordValidator.validarContrasena(),
        ],
      ],
      clave2: ['', [Validators.required]],
    },
    {
      validators: [
        this.passwordValidator.campoUnoIgualCampoDos('clave', 'clave2'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  registrar() {
    console.log(this.formRegistrar.get('perfil')?.value);
    if (this.formRegistrar.invalid) {
      return this.formRegistrar.markAllAsTouched();
    }

    const usuario = new FormData();
    usuario.append('nombre', this.formRegistrar.value['nombre']),
      usuario.append('apellido', this.formRegistrar.value['apellido']),
      usuario.append('email', this.formRegistrar.value['email']),
      usuario.append('clave', this.formRegistrar.value['clave']),
      usuario.append('telefono', this.formRegistrar.value['telefono']),
      usuario.append('pais', this.formRegistrar.value['pais']),
      usuario.append('perfil', this.formRegistrar.value['perfil']),
      usuario.append('fotografia', this.fotoFile);

    this.usuarioService.registrarUsuario(usuario).subscribe(() => {
      this.toastr.success('Usuario creado con exito');
      this.router.navigate(['/login']);
    });
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

  // validacion formularios
  getFieldError(field: string) {
    return this.validatorsService.getFieldError(this.formRegistrar, field);
  }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.formRegistrar, field);
  }
}
