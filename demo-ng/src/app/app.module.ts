import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from '~/app/screens/menu/menu.component';
import { SearchComponent } from "~/app/screens/search/search.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { SearchByPhoneComponent } from '~/app/screens/search/searchByPhone/searchByPhone.component';
import { YelpApiService } from '~/app/services/yelpapi.service';
import { BusinessResultsComponent } from '~/app/screens/search/businessResults/businessResults.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        SearchComponent,
        SearchByPhoneComponent,
        BusinessResultsComponent
    ],
    providers: [
        YelpApiService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
