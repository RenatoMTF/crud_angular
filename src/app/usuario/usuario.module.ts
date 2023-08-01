import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule,
  ]
})
export class UsuarioModule { }
