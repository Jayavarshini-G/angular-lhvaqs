import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor() {}

  login(username: string,password:string):boolean {
    if (username === 'admin' && password === 'password') {
    this.loggedIn = true;
    return true;
  }
}
  logout(){
    this.loggedIn=false;
  }
  isLoggedIn(): boolean{
    return this.loggedIn;
  }
  
}

