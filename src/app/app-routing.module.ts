import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';

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
    path: 'miPerfil',
    component: MiPerfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
