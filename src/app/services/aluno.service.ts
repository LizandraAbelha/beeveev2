import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Aluno } from '../models/Aluno';            
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private url: string = 'http://localhost:8080/alunos';  

  constructor(private http: HttpClient) {}  

  cadastrarAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.url, aluno);  
  }
}
