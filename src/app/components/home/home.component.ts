import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  partners = [
    {
      img: 'https://www.intelidata.inf.br/site/wp-content/uploads/2017/10/como-administrar-uma-empresa-desde-o-inicio-1200x640-c-top-center.jpg',
      name: 'Empresas X',
    },
    {
      img: 'https://guarapuava.pr.gov.br/wp-content/uploads/2020/03/Fachada-Prefeitura-13-scaled.jpg',
      name: 'Prefeitura de Guarapuava',
    },
    {
      img: 'https://humanidades.com/wp-content/uploads/2023/02/Empresa-Unsplash.jpg',
      name: 'Empresa Y',
    },
  ];
}
