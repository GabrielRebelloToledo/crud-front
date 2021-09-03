import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class LoginGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router) {}

    /* Guarda de rotas utilizada para retornar para a página inicial, caso o usuário já estiver logado */

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            
            if(this.userService.isLogged()){
                this.router.navigate(['home'])
                return false;
            }
            return true;
    }
}