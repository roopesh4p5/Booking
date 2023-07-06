import { Component } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {


ngOnInit(){

  function validateLogin(){
    // event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username")?.innerText
    var password = document.getElementById("password")?.innerText;
    console.log(username);
    if (username === "Roopesh" && password === "Roopesh123") {
      // Redirect to admin dashboard or perform desired action
      alert("Login successful! Redirecting to admin dashboard...");
      // window.location.href = "admin-dashboard.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
}






}
