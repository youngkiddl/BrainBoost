import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoComponent } from './components/curso/curso.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { CursosInstructorComponent } from './components/cursos-instructor/cursos-instructor.component';

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
    path: 'instructor/:id',
    component: CursosInstructorComponent,
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
