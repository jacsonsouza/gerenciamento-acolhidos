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

    // Replace with your actual logic to submit data (e.g., HTTP service)
    console.log(this.formData);
    // Simulate successful or failed submission (for demonstration)
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      this.submissionSuccess = true;
    } else {
      this.submissionError = 'Erro ao enviar o formulário. Tente novamente.';
    }
  }
}
