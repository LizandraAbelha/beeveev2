import { Routes } from '@angular/router';
import { CadastroUsuario } from './telas/cadastro-usuario/cadastro-usuario';

export const routes: Routes = [
  { path: 'cadastro', component: CadastroUsuario },
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' }
];
