import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from '../../Models/User/user';
import { FlashMessage } from '../../interfaces/flash-message';
import { environment } from '../../../environments/environment';

interface AuthResult {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/admin`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<FlashMessage> {
    return this.http.post<User[]>(`${this.apiUrl}`, { email, password }).pipe(
      map((users) => {
        const user = users.find((u) => u.email === email);

        if (!user)
          return { type: 'error', message: 'Incorrect datas.' } as FlashMessage;

        if (user.password !== password)
          return { type: 'error', message: 'Incorrect datas.' } as FlashMessage;

        localStorage.setItem('currentUser', JSON.stringify(user));

        return {
          type: 'success',
          message: 'User authenticated.',
        } as FlashMessage;
      }),
      catchError((error) => {
        console.log(error);
        return of({
          type: 'error',
          message: 'An error occurred',
        } as FlashMessage);
      })
    );
  }
}
