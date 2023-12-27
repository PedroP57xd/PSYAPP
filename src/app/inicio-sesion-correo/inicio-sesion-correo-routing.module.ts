import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSesionCorreoPage } from './inicio-sesion-correo.page';

const routes: Routes = [
  {
    path: '',
    component: InicioSesionCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioSesionCorreoPageRoutingModule {}
