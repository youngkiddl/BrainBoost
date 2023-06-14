import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmCursosComponent } from './components/adm-cursos/adm-cursos.component';

const routes: Routes = [
  {
    path: 'cursos',
    component: AdmCursosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModeradorRoutingModule {}
