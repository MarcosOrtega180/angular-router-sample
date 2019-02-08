import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CrisisCenterComponent} from "./crisis-center.component";
import {CrisisCenterListComponent} from "./crisis-center-list/crisis-center-list.component";
import {CrisisCenterDetailComponent} from "./crisis-center-detail/crisis-center-detail.component";
import {CrisisCenterHomeComponent} from "./crisis-center-home/crisis-center-home.component";

const routes: Routes = [
    {
        path: 'crisis-center', component: CrisisCenterComponent, children: [
            {
                path: '', component: CrisisCenterListComponent, children: [
                    {path: ':id', component: CrisisCenterDetailComponent},
                    {path:'', component:CrisisCenterHomeComponent}

                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrisisCenterRoutingModule {
}
