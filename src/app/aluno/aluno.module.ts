import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListaAlunoComponent } from './lista-aluno/lista-aluno.component';
import { AppRoutingModule } from '../app.routing.module';



@NgModule({
  declarations: [
    CadastroAlunoComponent, 
    ListaAlunoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    CadastroAlunoComponent, 
    ListaAlunoComponent
  ]
})
export class AlunoModule { }
