import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// create class defining the response data
export class HelloWorldBean {
  constructor(public message: String) { }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private http: HttpClient

  ) { }

  executeHelloWorldBeanService() {

    // add response type as a generic in get call
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean/");
  }

  executeHelloWorldBeanServiceWithPathVariable(name: String) {

    // use template literals
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`);
  }
}
