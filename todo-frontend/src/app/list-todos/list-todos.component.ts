import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: Number,
    public description: String,
    public done: Boolean,
    public targetDate: Date) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  private todos: Todo[];
  private errorMessageFromService = "";
  private message: String;

  // todos = [
  //   new Todo(1, 'Learn to Dance', true, new Date()),
  //   new Todo(2, 'Become an Angular Expert', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  // ]

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('Cris').subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  updateTodo(id: Number) {
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

  deleteTodo(id: Number) {
    this.todoService.deleteTodo('Cris', id).subscribe(
      response => {
        this.refreshTodos();
        this.message = `Delete of Todo ${id} Successful!`
      },
      error => this.message = `Delete of Todo ${id} Error!`
    );
  }

  handleSuccessResponse(response: any) {
    this.todos = response;
  }

  handleErrorResponse(error: any) {
    this.errorMessageFromService = error.error.message;
  }

}
