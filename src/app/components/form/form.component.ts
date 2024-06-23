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

  constructor(
    private fb: FormBuilder,
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
