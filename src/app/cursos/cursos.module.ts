import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './components/cursos/cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { CursoComponent } from './components/curso/curso.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CursosComponent, CursoComponent, CrearCursoComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class CursosModule {}
