import {Component, OnInit} from '@angular/core';
import {Crisis} from "../crisis";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-crisis-center-detail',
    templateUrl: './crisis-center-detail.component.html',
    styleUrls: ['./crisis-center-detail.component.css']
})
export class CrisisCenterDetailComponent implements OnInit {
    crisis: Crisis;
    editName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit() {
    }

    getCrisis(crisis: Crisis) {
        let crisisId = crisis ? crisis.id : null;
        this.router.navigate(['../', {id: crisisId, foo: 'foo'}], {relativeTo: this.route});
    }
}
