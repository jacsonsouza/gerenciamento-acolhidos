import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppointmentService } from '../../services/appointment/appointment.service';
import { Status } from '../../enums/appointment/status';
import { LocaleService } from '../../services/locale/locale.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [HttpClient],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  registerForm: FormGroup;

  states: any[] = [];
  cities: any[] = [];

  constructor(
    private fb: FormBuilder,
    private locale: LocaleService,
    private appointment: AppointmentService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      cpf: ['', Validators.required],
      mother_name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      observation: ['', Validators.required],
      status: [Status.Pending],
    });
    this.loadStates();
  }

  loadStates() {
    this.locale.getStates().subscribe({
      next: (states) => (this.states = states),
      error: (error) => console.error('Erro ao buscar estados', error),
    });
  }

  onStateChange(event: any) {
    const estadoId = event.target.value;

    if (estadoId) {
      this.locale.getCities(estadoId).subscribe({
        next: (cities) => (this.cities = cities),
        error: (error) => console.error('Erro ao buscar cidades', error),
      });
    }
  }

  register(): void {
    this.appointment.createAppointment(this.registerForm.value).subscribe({
      next: (response) => {
        alert(response);
      },
      error: (response) => {
        alert(response);
      },
    });
  }
}
