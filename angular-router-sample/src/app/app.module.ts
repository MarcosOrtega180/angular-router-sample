import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {FormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HeroesModule} from "./heroes/heroes.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {AdminModule} from "./admin/admin.module";
import { LoginComponent } from './auth/login/login.component';
import {AuthModule} from "./auth/auth.module";



@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HeroesModule,
        CrisisCenterModule,
        AdminModule,
        AuthModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        ComposeMessageComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
