import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  airport="";




 airports=[
    {
      "name": "Indira Gandhi International Airport",
      "city": "Delhi"
    },
    {
      "name": "Chhatrapati Shivaji Maharaj International Airport",
      "city": "Mumbai"
    },
    {
      "name": "Chennai International Airport",
      "city": "Chennai"
    },
    {
      "name": "Kempegowda International Airport",
      "city": "Bangalore"
    },
    {
      "name": "Netaji Subhas Chandra Bose International Airport",
      "city": "Kolkata"
    }
    
  ]

 }


