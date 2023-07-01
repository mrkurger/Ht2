import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdvertismentService } from './advertisment/advertisment.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AdvertismentComponent } from './advertisment/advertisment.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationService } from './registration/registration.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HomePageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component'; // Import MatIconModule


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AdvertismentComponent,
    RegistrationComponent,
    LoginComponent,
    HomePageComponent,
    ProfileComponent // <-- add this    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [AdvertismentService,RegistrationService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
