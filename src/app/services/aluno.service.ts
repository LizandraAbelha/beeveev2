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

  buscarPorId(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.url}/${id}`);
  }

  atualizarAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${this.url}/${aluno.id}`, aluno);
  }

  deletarAluno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
