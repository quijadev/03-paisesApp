import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais( term: string): Observable<Country[]> {

    const url = `${ this._apiUrl }/name/${ term }`;

    return this.http.get<Country[]>(url);

  }

  buscarCapital( term: string): Observable<Country[]> {

    const url = `${ this._apiUrl }/capital/${ term }`;

    return this.http.get<Country[]>(url);
  }

  buscarCodigo(id: string): Observable<Country>  {

    const url = `${ this._apiUrl }/alpha?codes=${ id }`;

    return this.http.get<Country>(url);

  }
}
