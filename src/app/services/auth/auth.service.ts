import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from '../../Models/User/user';

interface AuthResult {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
}
