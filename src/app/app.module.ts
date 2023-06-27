import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { ModificarPerfilComponent } from './components/modificar-perfil/modificar-perfil.component';
import { CambiarClaveComponent } from './components/cambiar-clave/cambiar-clave.component';
import { PerfilInstructorComponent } from './components/perfil-instructor/perfil-instructor.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { MiPerfilCursosComponent } from './components/mi-perfil-cursos/mi-perfil-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    MainPageComponent,
    FooterComponent,
    MiPerfilComponent,
    ModificarPerfilComponent,
    CambiarClaveComponent,
    PerfilInstructorComponent,
    CarritoComprasComponent,
    MiPerfilCursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
