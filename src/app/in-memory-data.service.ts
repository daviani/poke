import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { POKES } from './poke/mock-poke'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

    createDb () {
       return  { POKES }
    }
}
