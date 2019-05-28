import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials!';
  invalidLogin = false;

  // router becomes a dependency of login component - Dependency Injection built in feature into Angular
  // constructor parameter now becomes a member variable of the class automatically
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // Best way to do comparison in Javascript is triple =
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      // go to welcome component with name param
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

  handleLBasicAuthLogin() {

    this.basicAuthService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
      })
  }
  
}
