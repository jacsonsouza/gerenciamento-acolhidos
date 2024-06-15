import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from '../../Models/User/user';
<<<<<<< HEAD
import { FlashMessage } from '../../interfaces/flash-message';
import { environment } from '../../../environments/environment';
=======
>>>>>>> a4285f8 (Added authentication)

interface AuthResult {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
<<<<<<< HEAD
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
=======
  private baseUrl = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) {}

  // login(email: string, password: string): Observable<boolean> {
  //   return this.http.get<User[]>(`${this.baseUrl}?email=${email}`).pipe(
  //     map((users) => {
  //       if (users.length > 0) {
  //         let exists = false;
  //         users.forEach((user) => {
  //           if (user.password === password) {
  //             localStorage.setItem('currentUser', JSON.stringify(user));
  //             exists = true;
  //           }
  //         });

  //         return exists;
  //       }
  //       return false;
  //     })
  //   );

  login(email: string, password: string): Observable<AuthResult> {
    return this.http.get<User[]>(`${this.baseUrl}?email=${email}`).pipe(
      map((users) => {
        const user = users.find((u) => u.email === email);

        if (!user) return { success: false, message: 'Incorrect datas.' };

        if (user.password !== password)
          return { success: false, message: 'Incorrect datas.' };

        localStorage.setItem('currentUser', JSON.stringify(user));

        return { success: true, message: 'User authenticated.' };
      }),
      catchError((error) => {
        console.log(error);
        return of({ success: false, message: 'An error occurred' });
      })
    );
  }
>>>>>>> a4285f8 (Added authentication)
}
