import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { tokenDetails } from 'src/app/models/TokenDetails';
import { AuthService } from 'src/app/services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User()
  tokenDetails = new tokenDetails()
  userLoggedIn$ = new BehaviorSubject<boolean>(false)
  constructor(private router: Router,private authService: AuthService){}
    ngOnInit() : void{}

     signin(){
      this.authService.signin(this.user)
       .subscribe({
        next: (tokenDetails) => {
          this.tokenDetails = tokenDetails;
          localStorage.setItem("token",tokenDetails.token)
          this.userLoggedIn$.next(true);
          console.log(this.userLoggedIn$)
        }
      });
      }
}

