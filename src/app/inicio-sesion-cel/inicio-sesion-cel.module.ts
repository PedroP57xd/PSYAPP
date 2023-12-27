import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSesionCelPageRoutingModule } from './inicio-sesion-cel-routing.module';

import { InicioSesionCelPage } from './inicio-sesion-cel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSesionCelPageRoutingModule
  ],
  declarations: [InicioSesionCelPage]
})
export class InicioSesionCelPageModule {}
