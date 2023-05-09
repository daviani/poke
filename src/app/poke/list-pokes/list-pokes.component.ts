import { Component, OnInit } from '@angular/core'
import { Poke } from '../poke'
import { Router } from '@angular/router'
import { PokeService } from '../poke.service'

@Component({
    selector: 'app-list-pokes',
    templateUrl: './list-pokes.component.html'
})
export class ListPokesComponent implements OnInit {
    pokeList: Poke[]

    constructor (
        private router: Router,
        private pokeService: PokeService
    ) { }

    ngOnInit () {
        this.pokeService
            .getPokeList()
            .subscribe(
                pokeList => this.pokeList = pokeList
            )
        console.table(this.pokeList)
    }

    goToPoke (poke: Poke) {
        this.router.navigate(['/poke', poke.id])
    }
}
