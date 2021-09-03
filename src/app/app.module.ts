import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { MaterialModule } from './compartilhado/componentes/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlunoModule } from './aluno/aluno.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HomeModule,
    AlunoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
