import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSesionCelPage } from './inicio-sesion-cel.page';

const routes: Routes = [
  {
    path: '',
    component: InicioSesionCelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioSesionCelPageRoutingModule {}
