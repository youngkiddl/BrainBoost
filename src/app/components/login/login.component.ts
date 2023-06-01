import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioLogin } from 'src/app/interfaces/usuarioLogin';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    clave: ['', [Validators.required]],
  });

  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private errorService: ErrorService,
    private router: Router
  ) {}

  login() {
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched();
    }

    const usuario: UsuarioLogin = {
      email: this.loginForm.value['email'],
      clave: this.loginForm.value['clave'],
    };

    this.loading = true;
    this.authService.login(usuario).subscribe({
      next: (token: string) => {
        localStorage.setItem('token', token);
        const decodedToken = jwt_decode(token);
        localStorage.setItem('usuario', JSON.stringify(decodedToken));
        this.toastr.success('Inicio de sesion correcto');
        this.loading = false;
        this.router.navigate(['/']);
      },
      error: (e: HttpErrorResponse) => {
        this.errorService.msjError(e);
        this.loading = false;
      },
    });
  }
}
