import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeradorRoutingModule } from './moderador-routing.module';
import { AdmCursosComponent } from './components/adm-cursos/adm-cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { VerCursoComponent } from './components/ver-curso/ver-curso.component';

@NgModule({
  declarations: [AdmCursosComponent, VerCursoComponent],
  imports: [CommonModule, ModeradorRoutingModule, HttpClientModule],
})
export class ModeradorModule {}
