import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgradecimentoComponent } from './agradecimento.component';

const routes: Routes = [
  {
    path: '',
    component: AgradecimentoComponent
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class AgradecimentoRoutingModule { }
