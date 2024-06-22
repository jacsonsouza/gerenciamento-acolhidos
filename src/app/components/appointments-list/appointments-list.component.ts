import { Component } from '@angular/core';
import { Appointment } from '../../interfaces/appointment';
import { AppointmentService } from '../../services/appointment/appointment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments-list.component.html',
  styleUrl: './appointments-list.component.css',
})
export class AppointmentsListComponent {
  appointmentsList: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService.appointments().subscribe({
      next: (appointments) => {
        this.appointmentsList = appointments;
      },
      error: (error) => {
        console.error('Erro ao obter a lista de agendamentos:', error);
      },
    });
  }

  accept(appointmentId: number): void {
    this.appointmentService.accept(appointmentId).subscribe({
      next: (response) => {
        alert('Agendamento aceito.');
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  reject(appointmentId: number): void {
    this.appointmentService.reject(appointmentId).subscribe({
      next: (response) => {
        alert('Agendamento rejeitado.');
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  delete(appointmentId: number): void {
    this.appointmentService.delete(appointmentId).subscribe({
      next: (response) => {
        alert('Agendamento deletado.');
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
