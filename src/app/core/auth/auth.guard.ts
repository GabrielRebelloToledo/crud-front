import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router) {}

    /* Guarda de rotas para ser utilizada nas rotas 
       que não devem ser acessadas se o usuário não estiver logado*/
       
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            if(!this.userService.isLogged()){
                this.router.navigate(
                    ['login'],
                    {
                        queryParams: {
                            fromUrl: state.url
                        }
                    }
                );
                return false;
            }
            return true;
    }
}