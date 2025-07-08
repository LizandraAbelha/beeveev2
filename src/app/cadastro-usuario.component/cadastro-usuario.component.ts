import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Aluno } from '../models/Aluno';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  aluno: Aluno = {
    nome: '',
    cpf: '',
    email: '',
    login: '',
    senha: '',
    mediaMotorista: 0,  // Pode ficar definido mas não vai ser enviado
    mediaCaronista: 0
  };

  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit() {
    this.carregarAlunos();
  }

  enviarCadastro() {
    alert('Cheguei no método!');
    console.log('Enviando aluno:', this.aluno);

    const alunoParaCadastro = {
      nome: this.aluno.nome,
      cpf: this.aluno.cpf,
      email: this.aluno.email,
      login: this.aluno.login,
      senha: this.aluno.senha
    };

    console.log('JSON enviado:', JSON.stringify(alunoParaCadastro));

    this.alunoService.cadastrarAluno(alunoParaCadastro).subscribe({
      next: (response) => {
        console.log('Aluno cadastrado com sucesso!', response);
        this.limparFormulario();
        this.carregarAlunos();
      },
      error: (err) => {
        console.error('Erro ao cadastrar aluno:', err);
        alert('Erro ao cadastrar aluno: ' + (err.error?.message || err.message));
      }
    });
  }

  carregarAlunos() {
    this.alunoService.getAlunos().subscribe({
      next: (data) => this.alunos = data,
      error: (err) => console.error(err)
    });
  }

  limparFormulario() {
    this.aluno = {
      nome: '',
      cpf: '',
      email: '',
      login: '',
      senha: '',
      mediaMotorista: 0,
      mediaCaronista: 0
    };
  }
}
