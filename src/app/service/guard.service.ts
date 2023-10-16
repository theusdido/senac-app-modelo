import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree  } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  constructor(public auth_service:AutenticacaoService, public router: Router) {}

  canActivateChild(childRoute: ActivatedRouteSnapshot,state: RouterStateSnapshot): | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {
  // Se o usuário estiver sem sessão,
  // o enviamos para a tela de login
  //if (this.sessionService.estaLogado()) {

    //this.auth_service.validarToken();
  //}

    return this.router.parseUrl("/login");
  }
  
}