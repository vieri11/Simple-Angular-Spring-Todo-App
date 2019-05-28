import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username: String) {
    // add response type as a generic in get call
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: String, id: Number) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: String, id: Number, todo: Todo) {
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: String, todo: Todo) {
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }

  getTodo(username: String, id: Number) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }
}
