import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';


// define all the routes
const routes: Routes = [
  // welocome
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  // routes can access params
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService] },
  { path: '**', component: ErrorComponent } // ** wildcard
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// class that handles all the routing for the app
export class AppRoutingModule { }
