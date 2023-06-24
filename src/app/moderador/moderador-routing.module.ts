import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmCursosComponent } from './components/adm-cursos/adm-cursos.component';
import { VerCursoComponent } from './components/ver-curso/ver-curso.component';

const routes: Routes = [
  {
    path: 'cursos',
    component: AdmCursosComponent,
  },

  {
    path: 'ver-curso/:id',
    component: VerCursoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModeradorRoutingModule {}
