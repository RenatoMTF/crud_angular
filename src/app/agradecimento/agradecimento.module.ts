import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgradecimentoComponent } from './agradecimento.component';
import { AgradecimentoRoutingModule } from './agradecimento-routing.module';




@NgModule({
  declarations: [AgradecimentoComponent],
  imports: [
    CommonModule,
    AgradecimentoRoutingModule
  ]
})
export class AgradecimentoModule { }
