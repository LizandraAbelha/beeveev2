import { Routes } from '@angular/router';
import { CadastroUsuario } from './telas/cadastro-usuario/cadastro-usuario';
import { Login } from './telas/login/login';
import { Usuario } from './telas/usuario/usuario';
import { Historico } from './telas/historico/historico';
import { HorarioAcademico } from './telas/horario-academico/horario-academico';
import { CadastroCarro } from './telas/cadastro-carro/cadastro-carro';

export const routes: Routes = [
  { path: 'cadastro', component: CadastroUsuario },
  { path: 'login', component: Login },
  { path: 'usuario', component: Usuario },
  { path: 'historico', component: Historico },
  { path: 'horario-academico', component: HorarioAcademico },
  { path: 'cadastro-carro', component: CadastroCarro },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
