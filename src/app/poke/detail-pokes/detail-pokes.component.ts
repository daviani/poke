import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Poke } from '../poke'
import { PokeService } from '../poke.service'

@Component({
    selector: 'app-detail-pokes',
    templateUrl: './detail-pokes.component.html'
})
export class DetailPokesComponent implements OnInit {
    poke: Poke | undefined

    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private pokeService: PokeService
    ) {}

    ngOnInit () {
        const pokeId: string | null = this.route.snapshot.paramMap.get('id')

        if (pokeId) {
            this.poke = this.pokeService.getPokeById(+pokeId)
        }
    }

    goBack (): void {
        this.router.navigate(['/pokes'])
    }

    goToEditPoke (poke: Poke): void {
        this.router.navigate(['edit/poke', poke.id])
    }

    protected readonly Poke = Poke
}
