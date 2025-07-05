import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-usuario.html',
  styleUrl: './cadastro-usuario.css'
})
  export class CadastroUsuario {
      aluno = {
      nome: '',
      cpf: '',
      email: '',
      login: '',
      senha: ''
    };

      enviarCadastro() {
      console.log('Dados do aluno:', this.aluno);
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