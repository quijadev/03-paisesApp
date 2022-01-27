import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';
  private _apiUrlv2: string = 'https://restcountries.com/v2'

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,flags,population,cca2');
  }

  constructor(private http: HttpClient) { }

  buscarPais( term: string): Observable<Country[]> {

    const url = `${ this._apiUrl }/name/${ term }`;

    return this.http.get<Country[]>(url,{ params: this.httpParams });

  }

  buscarCapital( term: string): Observable<Country[]> {

    const url = `${ this._apiUrl }/capital/${ term }`;

    return this.http.get<Country[]>(url,{ params: this.httpParams });
  }

  buscarCodigo(id: string): Observable<Country>  {

    const url = `${ this._apiUrl }/alpha?codes=${ id }`;

    return this.http.get<Country>(url);

  }

  buscarRegion( region: string ): Observable<Country[]> {
    const params = new HttpParams()
    .set('fields','name,capital,population,flag,alpha2Code');

    const url = `${ this._apiUrlv2 }/regionalbloc/${ region }`;
    
    return this.http.get<Country[]>(url, { params })
    .pipe(
      tap(console.log)
    );
  }
}
