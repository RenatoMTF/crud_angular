import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { CadastroComponent } from '../cadastro/cadastro.component';


const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent
  },
  {
    path:'cadastro',
    component: CadastroComponent
  },
  {
    path:'cadastro/:id',
    component: CadastroComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class UsuarioRoutingModule { }
