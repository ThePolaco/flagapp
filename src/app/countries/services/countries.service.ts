import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
    constructor(private http: HttpClient) {}

    private apiUrl: string = 'https://restcountries.com/v3.1'

    searchCapital(term: string): Observable<Country[]> {
        //aqui estamos definiendo la llamada pero hasta que no escribamos .subscribe la llamada no se va a realizar
        return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`).pipe(
            //tap(countries => console.log('Tap1', countries)), // cada vez que paso se ejecuta este codigo
            //map(countries => []), // aunque yo reciba la respuesta retornare el objeto vacio
            //tap(countries =>  console.log('Tap2', countries)), // SIEMPRE SE RECIBE LA INFORMACION DEFINIDA DE OPERADOR ANTERIOR
            catchError( error => of([])), // el operador of consiste en crear un observable rapido en este caso creamos un nuevo observable que retorna array vacio
            // catchError( error => { 
            //     console.log(error);
            //     return of([]);
            //     }) // es lo mismo que arriba pero mas explicable

        ); // el pipe nos permite controlar los errores son operadores de rxjs
    }

    searchCountryByAlphaCode(cod: string): Observable<Country | null> {
        return this.http.get<Country[]>(`${this.apiUrl}/alpha/${cod}`).pipe(
            map( countries => countries.length > 0 ? countries[0] : null), // utilizamos el operdaor map solo para devolver el pirmero objeto
           catchError( error => of(null)), // el operador of consiste en crear un observable rapido en este caso creamos un nuevo observable que retorna array vacio
       ); 
   }

    searchCountry(term: string): Observable<Country[]> {
         return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`).pipe(
            catchError( error => of([])), // el operador of consiste en crear un observable rapido en este caso creamos un nuevo observable que retorna array vacio
        ); 
    }

    searchRegion(term: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`).pipe(
           catchError( error => of([])), // el operador of consiste en crear un observable rapido en este caso creamos un nuevo observable que retorna array vacio
       ); 
   }
    
}