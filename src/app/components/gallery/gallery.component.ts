import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common'; // Importe NgIf

interface Photo {
  src: string;
  alt: string;
  selected: boolean;
  description: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  imports: [NgClass, NgFor, NgIf] // Inclua NgIf nos imports
})
export class GalleryComponent {
  photos: Photo[] = [
    { src: 'assets/img/gerente.png', alt: 'Foto 1', selected: false, description: 'Gerente Adminstrativo' },
    { src: 'assets/img/psicologo.png', alt: 'Foto 2', selected: false, description: 'Psicologo' },
    { src: 'assets/img/zeladora.png', alt: 'Foto 3', selected: false, description: 'Zeladora' },
    { src: 'assets/img/cozinheira.png', alt: 'Foto 4', selected: false, description: 'Cozinheira' },
    { src: 'assets/img/assistente_social.png', alt: 'Foto 5', selected: false, description: 'assistente Social' },
    { src: 'assets/img/cuidador.png', alt: 'Foto 6', selected: false, description: 'Cuidador' },
  ];

  selectedPhoto: Photo | null = null; 

  togglePhotoSelection(photo: Photo) {
    this.selectedPhoto = this.selectedPhoto === photo ? null : photo; // Inverte a seleção
  }
}
