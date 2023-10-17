import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardService } from './service/guard.service';

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
    path: 'usuario-form',
    loadChildren: () => import('./usuario/usuario-form/usuario-form.module').then( m => m.UsuarioFormPageModule)
  },
  {
    path: 'usuario-form/:id',
    loadChildren: () => import('./usuario/usuario-form/usuario-form.module').then( m => m.UsuarioFormPageModule)
  },  
  {
    path: 'usuario-listar',
    loadChildren: () => import('./usuario/usuario-listar/usuario-listar.module').then( m => m.UsuarioListarPageModule)
  },
  {
    path: 'autenticacao',
    loadChildren: () => import('./autenticacao/autenticacao.module').then( m => m.AutenticacaoPageModule),
    canActivateChild: [GuardService]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
