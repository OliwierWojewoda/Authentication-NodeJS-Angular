import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { tokenDetails } from 'src/app/models/TokenDetails';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User()
  tokenDetails = new tokenDetails()
  userLoggedIn : boolean = false
  failureMessage : boolean = false

  constructor(private router: Router,private authService: AuthService){}
    ngOnInit() : void{}
     signin(){
      this.authService.signin(this.user)
       .subscribe({
        next: (tokenDetails) => {
          if(!tokenDetails){ this.failureMessage = true }
          this.tokenDetails = tokenDetails;
          sessionStorage.setItem("token",tokenDetails.token)
          this.userLoggedIn = true;
          this.failureMessage = false;
          this.router.navigate(['data'])
        }
      });
      }
}

