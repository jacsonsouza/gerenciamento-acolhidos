import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private ibgeUrl =
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http: HttpClient) {}

  getStates(): Observable<any[]> {
    return this.http.get<any[]>(this.ibgeUrl);
  }

  getCities(stateId: number): Observable<any[]> {
    const url = `${this.ibgeUrl}/${stateId}/municipios`;
    return this.http.get<any[]>(url);
  }
}
