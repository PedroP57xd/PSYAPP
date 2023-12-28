import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSesionCorreoPageRoutingModule } from './inicio-sesion-correo-routing.module';

import { InicioSesionCorreoPage } from './inicio-sesion-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InicioSesionCorreoPageRoutingModule
  ],
  declarations: [InicioSesionCorreoPage]
})
export class InicioSesionCorreoPageModule {}
