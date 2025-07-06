import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../services/aluno.service';


@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
  export class CadastroUsuarioComponent {
      aluno = {
      nome: '',
      cpf: '',
      email: '',
      login: '',
      senha: ''
    };

  constructor(private alunoService: AlunoService) {}

  enviarCadastro() {
    console.log('Enviando aluno:', this.aluno);

    this.alunoService.cadastrarAluno(this.aluno).subscribe({
      next: (response) => {
        console.log('Aluno cadastrado com sucesso!', response);
        this.limparFormulario();
      },
      error: (err) => {
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
        senha: '',
      };
  }
}