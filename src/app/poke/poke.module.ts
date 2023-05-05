import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { BorderCardDirective } from './border-card.directive'
import { PokeTypeColorPipe } from './poke-type-color.pipe'
import { ListPokesComponent } from './list-pokes/list-pokes.component'
import { DetailPokesComponent } from './detail-pokes/detail-pokes.component'
import { RouterModule, Routes } from '@angular/router'
import { PokeService } from './poke.service'
import { FormsModule } from '@angular/forms';
import { PokeFormComponent } from './poke-form/poke-form.component';
import { EditPokeComponent } from './edit-poke/edit-poke.component';

const pokeRoutes: Routes = [

    { path: 'edit/poke/:id', component: EditPokeComponent },
    { path: 'pokes', component: ListPokesComponent },
    { path: 'poke/:id', component: DetailPokesComponent },
]

@NgModule({
    declarations: [
        BorderCardDirective,
        PokeTypeColorPipe,
        ListPokesComponent,
        DetailPokesComponent,
        PokeFormComponent,
        EditPokeComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(pokeRoutes),
        NgOptimizedImage
    ],
    providers: [PokeService]
})
export class PokeModule {}
