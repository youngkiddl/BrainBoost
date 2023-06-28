import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoComponent } from './components/curso/curso.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { CursosInstructorComponent } from './components/cursos-instructor/cursos-instructor.component';
import { CursosCategoriaComponent } from './components/cursos-categoria/cursos-categoria.component';
import { InfoCursoComponent } from './components/info-curso/info-curso.component';

const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
  },
  {
    path: 'curso/:id',
    component: CursoComponent,
  },
  {
    path: 'info-curso/:id',
    component: InfoCursoComponent,
  },
  {
    path: 'instructor/:id',
    component: CursosInstructorComponent,
  },
  {
    path: 'categoria/:id',
    component: CursosCategoriaComponent,
  },
  {
    path: 'crear',
    component: CrearCursoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
