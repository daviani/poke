import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientInMemoryWebApiModule, } from 'angular-in-memory-web-api'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component-list'
import { PokeModule } from './poke/poke.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { InMemoryDataService } from './in-memory-data.service'

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        PokeModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
