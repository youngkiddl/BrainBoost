import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeradorRoutingModule } from './moderador-routing.module';
import { AdmCursosComponent } from './components/adm-cursos/adm-cursos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AdmCursosComponent],
  imports: [CommonModule, ModeradorRoutingModule, HttpClientModule],
})
export class ModeradorModule {}
