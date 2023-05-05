import { Component, OnInit } from '@angular/core'
import { Poke } from '../poke'
import { ActivatedRoute } from '@angular/router'
import { PokeService } from '../poke.service'

@Component({
    selector: 'app-edit-poke',
    template: `
        <h2 class="center" >
            edit-poke {{poke?.name}}
        </h2>
        <p class="center">
            <img [src]="poke?.picture" alt="">
        </p>
        <app-poke-form *ngIf="poke" [poke]="poke"></app-poke-form>
    `,
})
export class EditPokeComponent implements OnInit {
    poke: Poke | undefined

    constructor (
        private route: ActivatedRoute,
        private pokeService: PokeService
    ) {}

    ngOnInit () {
        const pokeId: string | null = this.route.snapshot.paramMap.get('id')
        if (pokeId) {
            this.poke = this.pokeService.getPokeById(+pokeId)
        } else {
            this.poke = undefined
        }
    }
}
