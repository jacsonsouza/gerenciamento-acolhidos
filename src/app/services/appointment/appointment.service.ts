import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../../interfaces/appointment';
import { Observable } from 'rxjs';
import { Status } from '../../enums/appointment/status';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private apiUrl = 'http://localhost:3000/appointments';

  constructor(private http: HttpClient) {}

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.apiUrl, appointment);
  }

  appointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiUrl);
  }

  accept(appointmentId: number): Observable<Appointment> {
    const url = `${this.apiUrl}/${appointmentId}`;

    const body = {
      status: Status.Accepted,
    };

    return this.http.patch<Appointment>(url, body);
  }

  reject(appointmentId: number): Observable<Appointment> {
    const url = `${this.apiUrl}/${appointmentId}`;

    const body = {
      status: Status.Rejected,
    };

    return this.http.patch<Appointment>(url, body);
  }

  delete(appointmentId: number): Observable<Appointment> {
    const url = `${this.apiUrl}/${appointmentId}`;

    return this.http.delete<Appointment>(url);
  }
}
