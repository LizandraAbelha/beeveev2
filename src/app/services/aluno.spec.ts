import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AlunoService } from './aluno.service';
import { Aluno } from '../models/Aluno';

describe('AlunoService', () => {
  let service: AlunoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlunoService]
    });

    service = TestBed.inject(AlunoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should POST aluno data', () => {
    const mockAluno: Aluno = {
      nome: 'João',
      cpf: '12345678900',
      email: 'joao@email.com',
      login: 'joaologin',
      senha: '123456'
    };

    service.cadastrarAluno(mockAluno).subscribe((response) => {
      expect(response).toEqual(mockAluno);
    });

    const req = httpMock.expectOne('http://localhost:8080/alunos');
    expect(req.request.method).toBe('POST');
    req.flush(mockAluno); 
  });
});
