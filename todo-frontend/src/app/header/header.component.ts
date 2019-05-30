import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username= '';

  constructor(private basicAuthService: BasicAuthenticationService) { }

  ngOnInit() {
    if( this.basicAuthService.isUserLoggedIn()) {
      this.username = this.basicAuthService.getAuthenticatedUser();
    }
  }

}
