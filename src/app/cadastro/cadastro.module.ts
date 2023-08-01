import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import {FormsModule} from '@angular/forms'



@NgModule({
  declarations: [CadastroComponent],
  imports: [
    FormsModule,
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
