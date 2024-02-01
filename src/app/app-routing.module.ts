import { NgModule } from "@angular/core";
import { Route } from "@angular/router";
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from "./services/guard/auth.guard.service";
import { CanDeactiveGuardService } from "./services/can.deactivate.guarc.service";
import { UserResovlerService } from "./services/resolve/user.resolver.services";


const routes: Route[] = [
    { path: '', component: HomeComponent, pathMatch: 'full' , data:{page:1,search:'home section'} },
    { path: 'home', component: HomeComponent },
    { path: 'categories', component: CategoriesComponent },

    {
        path: 'users', component: UsersComponent ,canActivateChild:[AuthGuardService],
        children: [
            { path: '', component: UserComponent, pathMatch: 'full' },
            { path: ':id/:name', component: UserComponent ,},
            { path: ':id/:name/edit', component: EditProfileComponent,canDeactivate:[CanDeactiveGuardService ],resolve:{user:UserResovlerService} },

        ]
    },
    { path: '**', component: NotFoundComponent }

]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}