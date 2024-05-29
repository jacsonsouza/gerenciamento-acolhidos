/*  ID13: O aluno utilizou efetivamente as diretivas @Input e @Output para estabelecer uma 
  comunicanção em uma hierarquia de componentes, passando e recebendo dados entre componentes 
  de maneira segura e consistente. */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';

@Component({
  selector: 'app-prayer',
  standalone: true,
  imports: [CommonModule, AudioPlayerComponent],
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css']
})
export class PrayerComponent {
  audioPath = "../../../assets/music/fundo-de-oração.mp3";
  
}
