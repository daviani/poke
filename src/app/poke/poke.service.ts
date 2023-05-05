import { Injectable } from '@angular/core'
import { POKES } from './mock-poke'
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
                tap((pokeList) => console.table(pokeList)),
                catchError((error) => {
                    console.error('error http', error)
                    return of([])
                })
            )
    }



    getPokeById (pokeId: number): Poke | undefined {
        return POKES.find(poke => poke.id == pokeId)
        // return this.http.get<Poke[]>('api/poke')
    }

    getPokeTypeList (): string[] {
        return ['Plante', 'Poison', 'Feu', 'Eau', 'Insecte', 'Normal', 'Vol', 'Electrik', 'Fée', 'Psy']
    }
}
