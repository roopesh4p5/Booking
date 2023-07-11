import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { HolidaysComponent } from './holidays/holidays.component';

const routes: Routes = [
  {path:"",redirectTo:'Home',pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:"Customerservice",component:CustomerserviceComponent},
  {path:"About",component:AboutComponent},
  {path:"Adminlogin",component:AdminloginComponent},
  {path:"Holidays",component:HolidaysComponent},
  {path:"Adminlogin/Adminpage",component:AdminpageComponent},
  {path:"**",component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
