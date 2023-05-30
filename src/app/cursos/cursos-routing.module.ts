import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoComponent } from './components/curso/curso.component';

const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
  },
  {
    path: ':id',
    component: CursoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
