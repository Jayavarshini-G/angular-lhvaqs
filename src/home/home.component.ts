import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html'
})
export class HomeComponent {

  constructor(
    public authService: AuthService
  ) {}

  onLogout() {
    this.authService.logout();
  }
 }
