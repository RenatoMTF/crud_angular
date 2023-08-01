import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './Usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url_consulta= "http://127.0.0.1:8000/api/v1/pessoa"
  url_getpessoa= "http://127.0.0.1:8000/api/v1/pessoa/get_pessoa"
  url_insere= "http://127.0.0.1:8000/api/v1/pessoa/insere"
  url_deleta=  "http://127.0.0.1:8000/api/v1/pessoa/deleta"
  url_edita = "http://127.0.0.1:8000/api/v1/pessoa/editar"
  constructor( private http: HttpClient) { }

  public salvar(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url_insere, usuario)
  }

  public listaUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url_consulta)
  }

  public delete(id:string):Observable<any>{
    return this.http.delete(this.url_deleta + "/" + id)
  }
  public getUsuarioPorId(id: number): Observable<Usuario> {
    const url = `${this.url_getpessoa}/${id}`;
    return this.http.get<Usuario>(url);
  }
  public atualizarUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${this.url_edita}/${usuario.id}`;
    return this.http.put<Usuario>(url, usuario);
  }

}
