import { Routes } from '@angular/router';
import { CadastroUsuario } from './telas/cadastro-usuario/cadastro-usuario';
import { Login } from './telas/login/login';

export const routes: Routes = [
  { path: 'cadastro', component: CadastroUsuario },
  { path: 'login', component: Login },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
