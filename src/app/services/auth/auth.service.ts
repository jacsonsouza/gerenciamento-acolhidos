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
    return this.http.get<User[]>(this.apiUrl).pipe(
      map((users) => {
        const user = users.find((u) => u.email === email);

        if (user && user.password === password) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          return {
            type: 'success',
            message: 'Usuário autenticado com sucesso!',
          } as FlashMessage;
        }

        return {
          type: 'error',
          message: 'Credenciais inválidas.',
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

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser')!);
  }
}
