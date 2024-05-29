/* ID9: O aluno demonstrou a aplicação de técnicas de event binding para capturar eventos do
 usuário na interface e interagir com o modelo de dados, mantendo a consistência e a 
 sincronização entre os dois. */

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common'; // Importação do NgFor
import { CommonModule } from '@angular/common'; // Importação do CommonModule

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, NgFor, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title_about = 'Quem Somos';
  paragraphs = [
    'Somos uma empresa comprometida em fornecer produtos/serviços de alta qualidade para nossos acolhidos.',
    'No século XIX, com o crescimento das cidades e o aumento da população urbana, especialmente nas áreas industriais, surgiram grandes desafios relacionados à habitação e à pobreza. Muitas pessoas migravam para as cidades em busca de trabalho, mas enfrentavam condições de vida precárias e falta de moradia adequada.',
    'Foi nesse contexto que os primeiros albergues começaram a surgir. Inicialmente, eles eram frequentemente ligados a instituições religiosas, como igrejas e mosteiros, que ofereciam abrigo temporário e comida para os necessitados. Esses locais eram essenciais para fornecer refúgio e assistência às pessoas sem-teto ou em situação de extrema pobreza.',
    'Com o passar do tempo, os albergues evoluíram e se tornaram mais organizados. Surgiram organizações de caridade e filantropia que passaram a administrar albergues de forma mais sistemática, oferecendo não apenas abrigo e alimentação, mas também assistência médica, orientação espiritual e serviços sociais básicos.',
    'Durante o século XX, especialmente após as guerras mundiais e períodos de recessão econômica, a demanda por albergues cresceu significativamente. Novos modelos de albergues foram desenvolvidos, incluindo abrigos de emergência, albergues para mulheres e crianças, e albergues especializados para grupos específicos, como veteranos de guerra e pessoas com problemas de saúde mental.',
    'Hoje, os albergues continuam desempenhando um papel crucial na assistência às pessoas em situação de vulnerabilidade social. Eles são parte integrante da rede de serviços sociais em muitas comunidades, oferecendo abrigo, apoio e esperança para aqueles que mais precisam. A história dos albergues é uma história de compaixão, solidariedade e resiliência, refletindo o compromisso contínuo da sociedade em cuidar uns dos outros e construir um mundo mais justo e humano.'
  ];
}
