import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion-correo',
    loadChildren: () => import('./inicio-sesion-correo/inicio-sesion-correo.module').then( m => m.InicioSesionCorreoPageModule)
  },
  {
    path: 'inicio-sesion-cel',
    loadChildren: () => import('./inicio-sesion-cel/inicio-sesion-cel.module').then( m => m.InicioSesionCelPageModule)
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
