import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './components/cursos/cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { CursoComponent } from './components/curso/curso.component';

@NgModule({
  declarations: [CursosComponent, CursoComponent],
  imports: [CommonModule, CursosRoutingModule, HttpClientModule],
})
export class CursosModule {}
