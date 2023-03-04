import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';

const routes: Routes = [
  { path: "signup",component:SignupComponent},
  { path: "login",component:LoginComponent},
  { path: "data",component:DataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
