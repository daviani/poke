import { Injectable } from '@angular/core'
import { Poke } from './poke'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, Observable, tap, of } from 'rxjs'

@Injectable()
export class PokeService {

    private url: string = 'api/POKES/'

    private log (response: Poke[] | Poke | undefined) {
        console.table(response)
    }

    private handleError (error: Error, errorValue: any) {
        console.error('err',error)
        return of(errorValue)
    }

    constructor (private http: HttpClient) {}

    getPokeList (): Observable<Poke[]> {
        // return POKES
        return this.http.get<Poke[]>(this.url)
            .pipe(
                tap((response) => this.log(response)),
                catchError((error) => this.handleError(error, []))
            )
    }

    getPokeById (pokeId: number): Observable<Poke | undefined> {
        return this.http.get<Poke>(`${this.url}${pokeId}`)
            .pipe(
                tap((response) => this.log(response)),
                catchError((error) => this.handleError(error, undefined))
            )
    }

    updatePoke (poke: Poke): Observable<null> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this.http.put<Poke>(this.url, poke, httpOptions)
            .pipe(
                tap((response) => this.log(response)),
                catchError((error) => this.handleError(error, null))
            )
    }

    getPokeTypeList (): string[] {
        return ['Plante', 'Poison', 'Feu', 'Eau', 'Insecte', 'Normal', 'Vol', 'Electrik', 'Fée', 'Psy']
    }
}
