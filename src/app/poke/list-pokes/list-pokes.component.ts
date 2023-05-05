import { Component, OnInit } from '@angular/core'
import { Poke } from '../poke'
import { Router } from '@angular/router'
import { PokeService } from '../poke.service'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-list-pokes',
    templateUrl: './list-pokes.component.html'
})
export class ListPokesComponent implements OnInit{
    pokeList: Observable<Poke[]>
    // pokeSelected: Poke | undefined

    constructor (
        private router: Router,
        private pokeService: PokeService
    ) { }

    ngOnInit() {
        this.pokeList = this.pokeService.getPokeList()
        console.table(this.pokeList)
    }


    goToPoke (poke: Poke) {
        this.router.navigate(['/poke', poke.id])
    }
}
