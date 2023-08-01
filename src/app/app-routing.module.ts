import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module=> module.HomeModule)
  },
  {
    path: 'cadastro/:id',
    loadChildren: () => import('./cadastro/cadastro.module').then(module=> module.CadastroModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then(module =>module.UsuarioModule)
  },
  {
    path: 'agradecimento',
    loadChildren: () => import('./agradecimento/agradecimento.module').then(module =>module.AgradecimentoModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
