import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './components/cursos/cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { CursoComponent } from './components/curso/curso.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosInstructorComponent } from './components/cursos-instructor/cursos-instructor.component';
import { AgregarVideoComponent } from './components/agregar-video/agregar-video.component';
import { CursosCategoriaComponent } from './components/cursos-categoria/cursos-categoria.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursoComponent,
    CrearCursoComponent,
    CursosInstructorComponent,
    AgregarVideoComponent,
    CursosCategoriaComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class CursosModule {}
