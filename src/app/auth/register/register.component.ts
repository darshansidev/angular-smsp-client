import { Component } from '@angular/core';
import { AuthService, User } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = {
    fullName: '',
    email: '',
    password: '',
    contactNo: 0,
  };

  // photoProofFile: File | null = null; // To store the selected image file

  constructor(private authService: AuthService, private router: Router) { }

  // onFileSelected(event: any) {
  //   this.photoProofFile = event.target.files[0];
  // }

  onRegister() {
    const formData = new FormData();
    formData.append('fullName', this.user.fullName);
    formData.append('email', this.user.email);
    formData.append('password', this.user.password);
    formData.append('contactNo', this.user.contactNo.toString());

    // if (this.photoProofFile) {
    //   formData.append('photoProof', this.photoProofFile);
    // }

    this.authService.register(formData).subscribe(
      response => {
        alert('User registered successfully');
        this.router.navigate(['/admin/login']);
      },
      error => {
        alert('Error registering user');
      }
    );
  }
}
