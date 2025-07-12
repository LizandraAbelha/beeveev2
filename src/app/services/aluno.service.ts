import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../models/Aluno';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlunoService {
  private url = 'http://localhost:8080/alunos';
  private loginUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}

  cadastrarAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.url, aluno);
  }

    login(nome: string, senha: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { nome, senha });
  }
}
