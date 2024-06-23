/* ID7: O aluno aplicou Pipes de maneira eficaz para formatar a apresentação de dados, 
garantindo que as informações exibidas sejam legíveis, esteticamente agradáveis e atendam 
aos requisitos de apresentação específicos para cada contexto. */

import { Component } from '@angular/core';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { TelefonePipe } from './telefone.pipe';
import { SocialIconPipe } from './social-icon.pipe';
import { SocialMedia } from './social-icon.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TelefonePipe, SocialIconPipe, DatePipe, UpperCasePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  redesSociais: { nome: SocialMedia, link: string }[] = [
   { nome: "Facebookkk" as SocialMedia, link: 'https://www.facebook.com/' },  
    { nome: SocialMedia.Facebook, link: 'https://www.facebook.com/' },
    { nome: SocialMedia.Instagram, link: 'https://www.instagram.com/' },
    { nome: SocialMedia.Twitter, link: 'https://www.twitter.com/' },
    { nome: SocialMedia.Whatsapp, link: 'https://www.whatsapp.com/' },
    { nome: SocialMedia.Linkedin, link: 'https://www.linkedin.com/' },
    { nome: SocialMedia.Youtubes, link: 'https://www.youtube.com/' },
    { nome: SocialMedia.Tiktok, link: 'https://www.tiktok.com/' }
  ];
  dataAtual = new Date();
}
