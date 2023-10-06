import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoService } from 'src/app/service/requisicao.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.page.html',
  styleUrls: ['./usuario-listar.page.scss'],
})
export class UsuarioListarPage implements OnInit {
  public usuarios:Array<any> = [];

  constructor(
    private requisicao_service:RequisicaoService,
    public router:Router
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.requisicao_service.get({
      controller:'usuario-listar'
    }).subscribe(
      (_res:any) => {
        this.usuarios = _res;
      }
    );
  }

  editar(id:number){
    this.router.navigateByUrl('/usuario-form/' + id);
  }

  excluir(id:number){
    this.requisicao_service.get({
      controller:'usuario-excluir',
      id:id
    })
    .subscribe(
      () => {
       this.listar() 
      }
    );
  }
}
