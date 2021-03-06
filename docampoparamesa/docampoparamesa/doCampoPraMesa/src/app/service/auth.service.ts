import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  logar(UsuarioLogin: UsuarioLogin) {
    return this.http.post('http://localhost:9000/usuarios/logar', UsuarioLogin)
  }

  cadastrar(Usuario: Usuario) {
    return this.http.post('http://localhost:9000/usuarios/cadastrar', Usuario)
  }

  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token == null){
      ok = true;
    }
    return ok;
  }

  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token != null){
      ok = true;
    }
    return ok;
  }

  admin() {
    let ok = false
    let email = localStorage.getItem('email')
    if(email == 'admin@gmail.com') {
      ok = true
    }
    return ok
  }

}
