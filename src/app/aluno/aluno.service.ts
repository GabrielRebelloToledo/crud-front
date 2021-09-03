import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Aluno } from './aluno';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(
    private http: HttpClient
  ) { }


  getAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${API}aluno`);
  }

  create(aluno: Aluno) {
    return this.http.post(`${API}aluno`, aluno).pipe(take(1));
  }

  getById(id) {
    if (!id) return EMPTY;
    return this.http.get<Aluno>(`${API}aluno/${id}`);
  }

  update(update) {
    console.log(update)
    return this.http.put(`${API}aluno/${update.id}`, update).pipe(take(1));
  }

  delete(id) {
    return this.http.delete<Aluno[]>(`${API}aluno/${id}`);
  }
}
