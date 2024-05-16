import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: string[] = [
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  loadNextGallery() {
    // Lógica para carregar outra galeria de fotos
    // Aqui você pode atualizar this.images com outra lista de imagens
    console.log('Próxima galeria carregada!');
  }
}
