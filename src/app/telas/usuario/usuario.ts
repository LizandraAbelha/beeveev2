import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlunoService } from '../../services/aluno.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.html',
  styleUrls: ['./usuario.css'],
})
export class Usuario implements OnInit {
  usuario: any = null;
  isMultifuncional: boolean = false;
  mensagemErro: string = '';
  editando: boolean = false;

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit() {
    this.carregarUsuario();
  }

  carregarUsuario() {
    this.alunoService.buscarPorId(1).subscribe({
      next: (res) => {
        this.usuario = res;
        this.isMultifuncional = !!this.usuario.mediaCaroneiro;
      },
      error: () => {
        this.mensagemErro = 'Erro ao carregar dados do usuário';
      },
    });
  }

  editar() {
    this.editando = true;
  }

  salvarEdicao() {
    this.alunoService.atualizarAluno(this.usuario).subscribe({
      next: () => {
        this.editando = false;
      },
      error: () => {
        this.mensagemErro = 'Erro ao salvar alterações';
      },
    });
  }

  cancelarEdicao() {
    this.editando = false;
    this.carregarUsuario();
  }

  deletarConta() {
    if (confirm('Tem certeza que deseja deletar sua conta?')) {
      this.alunoService.deletarAluno(this.usuario.id).subscribe({
        next: () => {
          alert('Conta deletada com sucesso');
          this.router.navigate(['/login']);
        },
        error: () => {
          this.mensagemErro = 'Erro ao deletar conta';
        },
      });
    }
  }

  irParaHistorico() {
    this.router.navigate(['/historico']);
  }

  irParaHorario() {
    this.router.navigate(['/horario-academico']);
  }

  irParaCarro() {
    this.router.navigate(['/cadastro-carro']);
  }

  cadastrarComoCaroneiro() {
    this.router.navigate(['/cadastro-carro']);
  }
}
