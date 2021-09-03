import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service'

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  ListaAlunos: Aluno[] = [];
  alunoForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private AlunoService: AlunoService
  ) { }

  ngOnInit() {
    this.pesquisaTodos();

    this.alunoForm = this.formBuilder.group({
      pesquisarTodos: ['']
    })
  }

  pesquisaTodos() {
    this.AlunoService.getAll().subscribe(result => { this.ListaAlunos = result })
  }

  editarAluno(id) {
    this.router.navigate(['/home/editar/aluno', id])
  }

  deletarAluno(id) {

    if (window.confirm('Tem certeza que deseja excluir este aluno?')) {
      this.AlunoService.delete(id).subscribe(result => { this.ListaAlunos = result; })
      alert('Aluno excluído.')
      window.location.reload();
    }

  }

}
