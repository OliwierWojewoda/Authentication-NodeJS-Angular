import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  isLoggedIn(){
    if(localStorage.getItem("token")?.length==0)
    {
      return false
    }
    else{return true}
  }
}
