import { Component, OnInit  } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../Usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public usuario:Usuario = new Usuario()
  public id: number = 0
  constructor(private usuarioService:UsuarioService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(this.id)
    if (this.id && this.id> 0){
      this.carregarUsuarioPorId();
    }

  }
  public editar() {
    this.usuarioService.atualizarUsuario(this.usuario).subscribe(
      response => {
        const responseString = JSON.stringify(response);
        alert('Usuário atualizado com sucesso!');
        console.log(response);
        this.router.navigate(['/usuario']);
      },
      error => {
        console.log(error);
        alert("Erro ao atualizar o usuário!");
      }
    );
  }

  private carregarUsuarioPorId() {
    this.usuarioService.getUsuarioPorId(this.id).subscribe(
      (usuario: Usuario) => {
        this.usuario = usuario;
      },
      error => {
        alert("Erro ao carregar informações do usuário!");
      }
    );
  }

  public salvar(){
      this.usuarioService.salvar(this.usuario).subscribe(
        response => {
          const responseString = JSON.stringify(response);
          alert(responseString);
          console.log(response)
          // this.router.navigate(['/usuario']);
          this.usuario = new Usuario()
        },
        error => {
          alert("Aconteceu algo de errado!")
        }
      )


  }

}
