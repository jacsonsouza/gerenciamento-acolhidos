/* ID10: O aluno implementou a técnica de two-way data binding para criar uma sincronização 
bidirecional automática entre a interface e o modelo de dados, permitindo uma atualização 
eficiente dos dados em ambos os lados. */

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  formData = {
    nome: '',
    email: '',
    telefone: '',
    curriculo: null as File | null
  };

  formSubmitted = false;
  submissionError: string | null = null;
  submissionSuccess: boolean = false;

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.formData.curriculo = target.files[0];
    }
  }

  submitForm() {
    this.formSubmitted = true;
    this.submissionError = null;
    this.submissionSuccess = false;

  
    console.log(this.formData);

    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      this.submissionSuccess = true;
    } else {
      this.submissionError = 'Erro ao enviar o formulário. Tente novamente.';
    }
  }
}
