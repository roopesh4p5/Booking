import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { HolidaysService } from './holidays.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ErrorComponent,
    AdminloginComponent,
    CustomerserviceComponent,
    AdminpageComponent,
    HolidaysComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HolidaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
