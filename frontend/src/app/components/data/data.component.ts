import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  public isLoggedIn(){
    if(sessionStorage.getItem("token")==null) return false
    else return true
}
}

