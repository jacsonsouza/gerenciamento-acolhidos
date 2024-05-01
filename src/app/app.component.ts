import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContatosComponent } from './components/contatos/contatos.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ContatosComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gerenciamento-acolhidos';
}
