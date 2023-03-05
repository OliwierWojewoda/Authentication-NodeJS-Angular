import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    isLoggedIn(){
    if(sessionStorage.getItem("token")==null) return false
    else return true
  }
  logout(){
    sessionStorage.removeItem("token")
    window.location.reload();
  }
}
