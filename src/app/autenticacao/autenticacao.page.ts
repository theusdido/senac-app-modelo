import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from './autenticacao.service';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.page.html',
  styleUrls: ['./autenticacao.page.scss'],
})
export class AutenticacaoPage implements OnInit {
  public login:string = '';
  public senha:string = '';

  constructor(
    public autenticacao_service:AutenticacaoService
  ) { }

  ngOnInit() {
  }

  logar(){
    let login = this.login;
    let senha = this.senha;

    this.autenticacao_service
    .logar(login,senha)
    .subscribe(
      (_res:any) => {
        if (_res.status == 'success'){
          sessionStorage.setItem('user_id',_res.user_id);
          sessionStorage.setItem('user_name',_res.user_name);
          sessionStorage.setItem('token',_res.token);
        }
      }
    );
  }
}
