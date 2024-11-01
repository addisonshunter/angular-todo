import { Component } from "@angular/core";
import { TodoListComponent } from "./todo-list/todo-list.component";

@Component({
  standalone: true,
  selector: 'atd-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  imports: [ TodoListComponent ],
})
export class ToDo {
    
}