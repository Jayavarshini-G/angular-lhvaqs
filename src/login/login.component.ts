// import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   username = '';
//   password = '';
//   message = '';

//   constructor(
//     private authService: AuthService,
//     private router: Router
//   ) {}

//   onSubmit() {
//     if (this.authService.isLoggedIn()) {
//       this.router.navigate(['/']);
//     }

//     if (this.username === 'admin' && this.password === 'password') {
//       this.authService.login();
//       this.router.navigate(['home']);
//     } else {
//       this.message = 'Invalid credentials';
//     }
//   }
// }

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  message = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.authService.login(this.username,this.password)) {
      this.router.navigate(['/home']);
    }

    else {
     alert("invalid")
    }
  }
}


