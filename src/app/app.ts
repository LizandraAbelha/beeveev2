import { Component } from '@angular/core';
import { CadastroUsuario } from './cadastro-usuario/cadastro-usuario'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CadastroUsuario],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}