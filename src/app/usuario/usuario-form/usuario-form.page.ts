import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.page.html',
  styleUrls: ['./usuario-form.page.scss'],
})
export class UsuarioFormPage implements OnInit {

  public id:number    = 0
  public nome:string  = '';
  public login:string = '';
  public senha:string = '';

  constructor(
    public requisicao_service:RequisicaoService,
    private loadingController: LoadingController,
    private activate_route:ActivatedRoute
  ) {

    this.activate_route.params
    .subscribe(
      (params:any) => {
        this.requisicao_service.get({
          controller:'usuario-get',
          id:params.id
        })
        .subscribe(
          (_res:any) => {
            this.id     = _res.id;
            this.nome   = _res.nome;
            this.login  = _res.login;
          }
        );
      }
    );
  }

  ngOnInit() {

  }

  async salvar(){

    const loading = await this.loadingController.create({
      message: 'Salvando...',
    });

    await loading.present();    

    const fd = new FormData();
    fd.append('controller','usuario');
    fd.append('id',String(this.id));
    fd.append('nome',this.nome);
    fd.append('login',this.login);
    fd.append('senha',this.senha);

    this.requisicao_service
    .post(fd)
    .subscribe(
      async () => {
        await loading.dismiss();
      }
    );

  }

}