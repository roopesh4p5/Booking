import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router,private activatedroute :ActivatedRoute) {}

  login() {
    if (this.username === '' || this.password === '') {
      this.errorMessage = '';
      alert('Please fill in the inputs.');
    } else if (this.username === 'Roopesh' && this.password === 'roovi123') {
      // Redirect to admin dashboard or perform desired action
      alert('Login successful! Redirecting to admin dashboard...');
      this.router.navigate(['Adminpage',{relativeTo:this.activatedroute}]);
    } else {
      this.errorMessage = 'Invalid username or password. Please try again.'; 
    }
  }
}
