import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing2';
  constructor(private authService: AuthService) { }


  logIn() {
    this.authService.login();
  }


  logOut() {
    this.authService.logout();
  }
}
