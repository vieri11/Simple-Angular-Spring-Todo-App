package com.demo.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthController {

	// returned bean is automatically converted to JSON
	@GetMapping(path = "/basic-auth")
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("You are authenticated!");
	}

}
