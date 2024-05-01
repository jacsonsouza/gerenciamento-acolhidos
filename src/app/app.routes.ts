import { Routes } from '@angular/router';
import { ContatosComponent } from './components/contatos/contatos.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contatos', component: ContatosComponent },
];
