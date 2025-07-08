import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { CadastroUsuarioComponent } from './cadastro-usuario.component/cadastro-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,           
    CadastroUsuarioComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
