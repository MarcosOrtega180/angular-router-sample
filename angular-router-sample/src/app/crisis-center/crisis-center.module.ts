import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CrisisCenterRoutingModule} from './crisis-center-routing.module';

import {CrisisCenterComponent} from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterListComponent } from './crisis-center-list/crisis-center-list.component';
import { CrisisCenterDetailComponent } from './crisis-center-detail/crisis-center-detail.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        CrisisCenterComponent,
        CrisisCenterHomeComponent,
        CrisisCenterListComponent,
        CrisisCenterDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CrisisCenterRoutingModule
    ]
})
export class CrisisCenterModule {
}
