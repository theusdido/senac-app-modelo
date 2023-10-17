import { Injectable } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  public is_logged!:Observable<boolean>;
  constructor(
    public requisicao_service:RequisicaoService
  ) { }

  logar(login:string,senha:string){

    const fd = new FormData();
    fd.append('controller','logar');
    fd.append('login',login);
    fd.append('senha',senha);

    return this.requisicao_service
    .post(fd);
  }

  validarToken(){
    this.requisicao_service.get({
      controller:'validar-token',
      token:sessionStorage.getItem('token')
    }).subscribe(
      () => {
        this.is_logged.subscribe(()=>false);
      }
    );
  }
}