import { Component } from '@angular/core';
import { HolidaysService } from '../holidays.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
})
export class HolidaysComponent {

  plans:any;
  constructor(private holiday: HolidaysService) {
    this.plans = this.holiday.holidayplans();
  }
  value="";
  ngOnInit(){
    console.log(this.plans);
    this.value=this.plans[10].image
  }
  
}
