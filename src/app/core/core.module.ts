import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { AppMsgErroModule } from '../compartilhado/componentes/app-msg-erro/app-msg-erro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestInterceptor } from './auth/request.interceptor';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        AppMsgErroModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule{

}