import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { MenuComponent } from '~/app/screens/menu/menu.component';
import { SearchComponent } from "~/app/screens/search/search.component";


const routes: Routes = [
    { path: "", redirectTo: "/menu", pathMatch: "full" },
    { path: 'menu', component: MenuComponent},
    { path: 'search', component: SearchComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }