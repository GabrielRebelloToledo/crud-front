import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Aluno } from '../aluno';

import { AlunoService } from '../aluno.service'
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  alunoForm: FormGroup;
  
  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private listaUsuarios: UserService,
    private AlunoService: AlunoService
  ) { }

  ngOnInit(): void {
   

    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.AlunoService.getById(id))
      )
      .subscribe(aluno => this.editarForm(aluno)
      );

    this.alunoForm = this.formBuilder.group({
      id: [null],
      id_user: ['', Validators.required],
      nome: ['', Validators.required],
      curso: ['', Validators.required]
    });
  }

  editarForm(aluno: Aluno) {

    this.alunoForm.patchValue(
      {
        id: aluno[0].id,
        nome: aluno[0].nome,
        curso: aluno[0].curso
      }
    )
  }

  preencheCampos(aluno: Aluno) {
    this.alunoForm.patchValue(
      {
        nome: aluno.nome,
        curso: aluno.curso
      });

  }

  submit() {
    if (this.alunoForm.value.id) {
      const atualizarAluno = this.alunoForm.getRawValue() as Aluno;
      this.AlunoService.update(atualizarAluno).subscribe(
        success => {
          alert('Aluno atualizado!')
          this.alunoForm.reset()

        },
        error => {
          alert('Erro ao atualizar.')
        }
      )
    } else {
      const novoAluno = this.alunoForm.getRawValue() as Aluno;
      this.AlunoService.create(novoAluno).subscribe(
        success => {
          alert('Aluno salvo!')
          this.alunoForm.reset()
        },
        error => {
          alert('Erro ao salvar.')
        }
      )
    }
  }

}
