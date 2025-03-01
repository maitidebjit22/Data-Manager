import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Example login credentials
    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    if (this.username === adminUsername && this.password === adminPassword) {
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }
}
