import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  welcomeMessageFromService: String;
  errorMessageFromService: String;
  message = 'Some Welcome Message';
  name = '';

  // ActivatedRoute Dependency Injection to access route parameters
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      // with observables you can declare what needs to be done and not leave
      // the thread hanging for a response and just keep going.. once the response
      // gets back it will execute the callback function for success or handle error
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithPathVariable() {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any) {
    this.errorMessageFromService = error.error.message;
  }
}
