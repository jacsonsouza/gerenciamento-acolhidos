/* ID11: O aluno fez uso eficaz de variáveis de template para manipulação dinâmica dos dados 
na interface gráfica, demonstrando a capacidade de exibir informações de maneira flexível 
e adaptável. */

import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

interface Photo {
  src: string;
  alt: string;
  selected: boolean;
  description: string; 
  details: string;     
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  imports: [NgClass, NgFor, NgIf]
})
export class GalleryComponent {
  photos: Photo[] = [
    { src: 'assets/img/gerente.png', alt: 'Foto 1', selected: false, description: 'Gerente Administrativo', details: 'Responsável pela gestão administrativa do albergue, incluindo finanças, recursos humanos e operações diárias.' },
    { src: 'assets/img/psicologo.png', alt: 'Foto 2', selected: false, description: 'Psicólogo', details: 'Oferece suporte psicológico aos acolhidos, realizando atendimentos individuais e em grupo, além de desenvolver atividades terapêuticas.' },
    { src: 'assets/img/zeladora.png', alt: 'Foto 3', selected: false, description: 'Zeladora', details: 'Responsável pela limpeza e organização das áreas comuns do albergue, garantindo um ambiente limpo e agradável para todos.' },
    { src: 'assets/img/cozinheira.png', alt: 'Foto 4', selected: false, description: 'Cozinheira', details: 'Prepara as refeições diárias para os acolhidos, seguindo um cardápio balanceado e nutritivo.' },
    { src: 'assets/img/assistente_social.png', alt: 'Foto 5', selected: false, description: 'Assistente Social', details: 'Acompanha os acolhidos em suas necessidades sociais, auxiliando na busca por emprego, documentação e acesso a benefícios.' },
    { src: 'assets/img/cuidador.png', alt: 'Foto 6', selected: false, description: 'Cuidador', details: 'Oferece cuidados básicos aos acolhidos que necessitam de auxílio em atividades diárias, como higiene pessoal e alimentação.' }
  ];

  selectedPhoto: Photo | null = null;

  togglePhotoSelection(photo: Photo) {
    this.selectedPhoto = this.selectedPhoto === photo ? null : photo;
  }

  showDescription(photo: Photo) {
    photo.selected = true;
  }

  hideDescription(photo: Photo) {
    if (this.selectedPhoto !== photo) {
      photo.selected = false;
    }
  }
}
