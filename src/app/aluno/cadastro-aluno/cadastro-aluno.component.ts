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
  images;
  formData;

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
      curso: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  selectImage(event){
    if(event.target.files.length >0){
      const file = event.target.files[0];
      this.images = file;
      this.formData = new FormData();
      this.formData.append('file', this.images);
      console.log(this.formData)
    }
  }

  editarForm(aluno: Aluno) {

    this.alunoForm.patchValue(
      {
        id: aluno[0].id,
        nome: aluno[0].nome,
        curso: aluno[0].curso,
        image: aluno[0].image
      }
    )
  }

  preencheCampos(aluno: Aluno) {
    this.alunoForm.patchValue(
      {
        nome: aluno.nome,
        curso: aluno.curso,
        image: aluno.image
      });

  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);
    this.AlunoService.image(this.formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    console.log(formData);
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
