import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HolidaysService } from '../holidays.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  // constructor() {
  //   this.plans = this.holiday.holidayplans();
  // }

  isadmin;
  constructor(private router: Router,private activatedroute :ActivatedRoute, private holiday: HolidaysService) {
    this.isadmin=holiday.isadmin();
  }
   login() {
    if (this.username === '' || this.password === '') {
      this.errorMessage = '';
      alert('Please fill in the inputs.');
    } else if (this.username === 'Roopesh' && this.password === 'roovi123') {
      // Redirect to admin dashboard or perform desired action
       this.isadmin=true;
      alert('Login successful! Redirecting to admin dashboard...');
      this.router.navigate(['Adminpage',{relativeTo:this.activatedroute}]);
    } else {
      this.errorMessage = 'Invalid username or password. Please try again.'; 
    }
  }
}
