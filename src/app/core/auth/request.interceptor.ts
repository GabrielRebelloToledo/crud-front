import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable, throwError as observableThrowError } from "rxjs";
import { HttpSentEvent } from "@angular/common/http";
import { HttpHeaderResponse } from "@angular/common/http";
import { HttpProgressEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { HttpUserEvent } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

import { TokenService } from "../token/token.service";
import { UserService } from '../user/user.service';

const API = environment.apiUrl;

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    
    constructor(
        private tokenService: TokenService,
        private userService: UserService,
        private router: Router
    ) {}

    // intercepta cada requisição feita web para a api, verifica o token, clona e envia para a api
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent 
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
            
            if (req.url == `${API}login`) {
                return next.handle(req);
            }
       
            if(this.tokenService.hasToken()) {
                const token = this.tokenService.getToken();
                req = req.clone({
                    setHeaders: {
                        'x-access-token': token
                    }
                });
            }
            return next.handle(req)
                .pipe(
                    catchError(err => {
                        if(err.status === 401){
                            console.log('entrou');
                            this.userService.logout();
                            this.router.navigate(['login']);
                            alert('Sua sessão expirou');
                            return observableThrowError(err);
                        }
                    })
                )
            ;
    }
}