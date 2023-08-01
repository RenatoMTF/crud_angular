import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario:any =[]
  constructor( private usuarioService:UsuarioService, private router: Router) {}

  ngOnInit() {
    this.listaUsuario()
  }
  public listaUsuario() {
    this.usuarioService.listaUsuario().subscribe(
      response => {
        this.usuario = response
      },
      error => {
        alert("Houve algum erro ao carregar a lista")
      }
    )
  }

  public editar(id:string){
    this.router.navigateByUrl('/cadastro/' + id );
  }

  public deletar(id: string) {
    this.usuarioService.delete(id).subscribe(
      response => {
        alert("Usuario excluido com sucesso")
        this.listaUsuario()
        console.log(this.listaUsuario)
      },
      error => {
        alert("Não foi possivel excluir o Usuario")
      }
    )
  }


}
