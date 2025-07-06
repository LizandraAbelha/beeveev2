import { Component } from '@angular/core';
import { CadastroUsuarioComponent } from './cadastro-usuario.component/cadastro-usuario.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CadastroUsuarioComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}