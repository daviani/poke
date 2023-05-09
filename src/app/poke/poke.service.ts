import { Injectable } from '@angular/core'
import { Poke } from './poke'
import { HttpClient } from '@angular/common/http'
import { catchError, Observable, tap, of } from 'rxjs'

@Injectable()
export class PokeService {

    constructor (private http: HttpClient) {}

    getPokeList (): Observable<Poke[]> {
        // return POKES
        return this.http.get<Poke[]>('api/POKES')
            .pipe(
                tap((response) => this.log(response)),
                catchError((error) => this.handleError(error, []))
            )
    }

    getPokeById (pokeId: number): Observable<Poke | undefined> {
        return this.http.get<Poke>(`api/POKES/${pokeId}`)
            .pipe(
                tap((response) => this.log(response)),
                catchError((error) => this.handleError(error, undefined))
            )
    }

    private log (response: Poke[] | Poke | undefined) {
        console.table(response)
    }

    private handleError (error: Error, errorValue: any) {
        console.error(error)
        return of(errorValue)
    }

    getPokeTypeList (): string[] {
        return ['Plante', 'Poison', 'Feu', 'Eau', 'Insecte', 'Normal', 'Vol', 'Electrik', 'Fée', 'Psy']
    }
}
