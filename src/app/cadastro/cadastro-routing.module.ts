import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component';
import { UsuarioComponent } from '../usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroComponent
  },
  {
    path:'usuario',
    component: UsuarioComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class CadastroRoutingModule { }
