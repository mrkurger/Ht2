import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component'; // make sure this path is correct
import { HomePageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AdvertismentComponent } from './advertisment/advertisment.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: '', component: AdvertismentComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
