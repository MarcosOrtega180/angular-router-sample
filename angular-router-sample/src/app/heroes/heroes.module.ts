import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroesRoutingModule} from './heroes-routing.module';
import {HeroListComponent} from "./hero-list/hero-list.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        HeroDetailComponent,
        HeroListComponent,
    ],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        FormsModule
    ]
})
export class HeroesModule {
}
