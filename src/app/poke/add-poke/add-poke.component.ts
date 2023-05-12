import { Component, OnInit } from '@angular/core'
import { Poke } from '../poke'

@Component({
    selector: 'app-add-poke',
    template: `
        <h2 class="center">
            Create Poke
        </h2>
        <app-poke-form [poke]="poke"></app-poke-form>
    `,
})
export class AddPokeComponent implements OnInit{
    poke: Poke

    constructor () {}

    ngOnInit (): void {
        this.poke = new Poke()
        console.log(this.poke)
    }

}
