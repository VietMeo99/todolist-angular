import { Component } from "@angular/core";

import { TodoService } from "../../services/todo.service";

@Component({
  selector: "todo-header",
  templateUrl: "todo-header.component.html",
})
export class TodoHeaderComponent {
  newTodoText = "";

  constructor(private todoService: TodoService) {}

  addTodo(title: string): void {
    console.log("newTodoText : ", this.newTodoText);

    this.todoService.addTodo(title);
    this.newTodoText = "";
  }
}
