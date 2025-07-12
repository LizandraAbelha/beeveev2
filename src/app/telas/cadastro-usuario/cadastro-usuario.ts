import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../models/Aluno';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-usuario.html',
  styleUrls: ['./cadastro-usuario.css']
})
export class CadastroUsuario {
  aluno: Aluno = {
    nome: '',
    cpf: '',
    email: '',
    login: '',
    senha: ''
  };

  alunosCadastrados: Aluno[] = [];

  constructor(private alunoService: AlunoService) {}

  enviarCadastro() {
    this.alunoService.cadastrarAluno(this.aluno).subscribe({
      next: (response: Aluno) => {
        console.log('Aluno cadastrado com sucesso!', response);
        this.alunosCadastrados.push({ ...response });
        this.limparFormulario();
      },
      error: (err: any) => {
        console.error('Erro ao cadastrar aluno:', err);
      }
    });
  }

  limparFormulario() {
    this.aluno = {
      nome: '',
      cpf: '',
      email: '',
      login: '',
      senha: ''
    };
  }
}
