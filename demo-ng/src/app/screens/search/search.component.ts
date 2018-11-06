import { Component } from "@angular/core";
import { Route, Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'ns-search',
    moduleId: module.id,
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    type: string;
    constructor(
        private route: ActivatedRoute
    ) {
        this.type = this.route.snapshot.paramMap.get('type');
    }
}