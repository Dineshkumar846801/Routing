import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/guard/auth.guard.service';
import { CanDeactiveGuardService } from './services/can.deactivate.guarc.service';
import { NgModel } from '@angular/forms';
import { UserResovlerService } from './services/resolve/user.resolver.services';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    CategoriesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

  ],
  providers: [AuthService, AuthGuardService , CanDeactiveGuardService,UserResovlerService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
