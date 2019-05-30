import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private id: Number;
  private todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // temp dummy data until async subscription call is complete
    this.todo = new Todo(this.id, '', false, new Date());

    // only initialize form when you are updating an already existing todo
    if (this.id != -1) {
      this.todoService.getTodo("Cris", this.id).subscribe(
        data => this.todo = data,
        error => console.log(error)
      );
    }
  }

  saveTodo() {
    if (this.id == -1) {
      // create todo
      this.todoService.createTodo("Cris", this.todo).subscribe(
        data => this.router.navigate(['todos']),
        error => console.log(error)
      );
    }
    else {
      this.todoService.updateTodo("Cris", this.id, this.todo).subscribe(
        data => this.router.navigate(['todos']),
        error => console.log(error)
      );
    }
  }
}
