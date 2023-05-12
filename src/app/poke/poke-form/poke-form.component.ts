import { Component, Input, OnInit } from '@angular/core'
import { PokeService } from '../poke.service'
import { Poke } from '../poke'
import { Router } from '@angular/router'

@Component({
    selector: 'app-poke-form',
    templateUrl: './poke-form.component.html',
    styleUrls: ['./poke-form.component.css']
})
export class PokeFormComponent implements OnInit {
    @Input() poke: Poke
    types: string[]
    isAddForm: boolean = false

    constructor (
        private router: Router,
        private pokeService: PokeService
    ) {}

    ngOnInit () {
        this.types = this.pokeService.getPokeTypeList()
        this.isAddForm = this.router.url.includes('add')
        console.log(this.isAddForm, this.router.url)
    }

    hasType (type: string): boolean {
        return this.poke.types.includes(type)
    }

    selectType ($event: Event, type: string) {
        const isChecked: boolean = ($event.target as HTMLInputElement).checked

        if (isChecked) {
            this.poke.types.push(type)
        } else {
            const index = this.poke.types.indexOf(type)
            this.poke.types.splice(index, 1)
        }
        console.log(this.poke.types)
    }

    isTypesValid (type: string): boolean {
        if (this.poke.types.length == 1 && this.hasType(type)) {
            return false
        } else if (this.poke.types.length > 2 && !this.hasType(type)) {
            return false
        }
        return true
    }

    onSubmit () {
        console.log('submit', this.poke)
        if (this.isAddForm) {
            this.pokeService.addPoke(this.poke)
                .subscribe((poke: Poke) => {
                    if (this.poke) {
                        this.router.navigate(['/poke', poke.id])
                    }
                })
        } else {
            this.pokeService.updatePoke(this.poke)
                .subscribe(() => {
                    if (this.poke) {
                        this.router.navigate(['/poke', this.poke.id])
                    }
                })

        }

    }

}
