import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ValidatorsService } from 'src/app/services/validators.service';
import { CelularValidator } from 'src/app/validators/celular-validator.service';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css'],
})
export class ModificarPerfilComponent implements OnInit {
  // servicios
  private usuarioService = inject(UsuarioService);
  private validatorsService = inject(ValidatorsService);

  // variables
  fotoPrevisualizar!: any;
  fotoFile!: File;
  loading: boolean = true;

  public formEditarUsuario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.emailPattern),
      ],
    ],
    pais: ['', [Validators.required]],
    telefono: [
      0,
      [
        Validators.required,
        Validators.maxLength(9),
        this.celularValidator.celularChilenoValidator(),
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private celularValidator: CelularValidator
  ) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    const usuarioString = localStorage.getItem('usuario');
    const usuario = usuarioString ? JSON.parse(usuarioString) : null;

    const usuarioId = usuario.usuario.id;

    this.loading = true;
    this.usuarioService.getUsuario(usuarioId).subscribe((usuario) => {
      this.formEditarUsuario.setValue({
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        telefono: usuario.telefono,
        pais: usuario.pais,
      });

      this.fotoPrevisualizar = `http://localhost:3001/imagen/${usuario.fotografia}`;
      this.loading = false;
    });
  }

  getFieldError(field: string) {
    return this.validatorsService.getFieldError(this.formEditarUsuario, field);
  }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.formEditarUsuario, field);
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

  modificarUsuario() {
    if (this.formEditarUsuario.invalid) {
      return this.formEditarUsuario.markAllAsTouched();
    }
    const usuarioString = localStorage.getItem('usuario');
    const usuarioStorage = usuarioString ? JSON.parse(usuarioString) : null;

    const usuarioId = usuarioStorage.usuario.id;

    const usuario = new FormData();
    usuario.append('email', this.formEditarUsuario.value['email']);
    usuario.append('telefono', this.formEditarUsuario.value['telefono']);
    usuario.append('pais', this.formEditarUsuario.value['pais']);
    usuario.append('id', usuarioId);
    usuario.append('fotografia', this.fotoFile);

    this.loading = true;
    this.usuarioService.modificarUsuario(usuario).subscribe(() => {
      this.loading = false;
      this.router.navigate(['/perfil']);
      this.toastr.success('Se modificaron sus datos correctamente');
    });
  }
}
