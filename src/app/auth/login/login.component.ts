import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    alert('Login Done ....');

    this.authService.login(this.credentials).subscribe(
      (response) => {
        this.router.navigate(['/admin/dashboard']);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
