import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  nome: string = '';
  senha: string = '';
  mensagemErro: string = '';

  constructor(private alunoService: AlunoService, private router: Router) {}

  login() {
    this.alunoService.login(this.nome, this.senha).subscribe({
      next: (res) => {
        this.router.navigate(['/usuario']);
      },
      error: (err) => {
        this.mensagemErro = 'Nome ou senha inválidos';
      },
    });
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }
}
