import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { ModificarPerfilComponent } from './components/modificar-perfil/modificar-perfil.component';
import { CambiarClaveComponent } from './components/cambiar-clave/cambiar-clave.component';
import { PerfilInstructorComponent } from './components/perfil-instructor/perfil-instructor.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { MiPerfilCursosComponent } from './components/mi-perfil-cursos/mi-perfil-cursos.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: 'mod',
    loadChildren: () =>
      import('./moderador/moderador.module').then((m) => m.ModeradorModule),
  },
  {
    path: 'perfil',
    component: MiPerfilComponent,
  },
  {
    path: 'perfil-cursos',
    component: MiPerfilCursosComponent,
  },
  {
    path: 'instructor/:id',
    component: PerfilInstructorComponent,
  },
  {
    path: 'modificar-perfil',
    component: ModificarPerfilComponent,
  },
  {
    path: 'cambiar-clave',
    component: CambiarClaveComponent,
  },
  {
    path: 'carrito',
    component: CarritoComprasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
