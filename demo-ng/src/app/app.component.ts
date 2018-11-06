import { Component } from "@angular/core";
import { YelpApiService } from '~/app/services/yelpapi.service';
import { YOUR_API_KEY } from '~/app/enviornment';

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {
    constructor(
        private yelpApi: YelpApiService
    ) {
        yelpApi.init(YOUR_API_KEY);
    }
}
