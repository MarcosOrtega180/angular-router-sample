import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroListComponent} from './hero-list/hero-list.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
    {path:'crisis-center', component:CrisisListComponent},
    {path:'heroes', component:HeroListComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        CrisisListComponent,
        HeroListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} //<--debugging purposes only
        ),
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
