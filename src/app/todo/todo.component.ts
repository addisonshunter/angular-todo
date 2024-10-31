import { Component } from "@angular/core";
import { TodoListComponent } from "./todo-list/todo-list.component";

@Component({
    standalone: true,
    selector: 'atd-todo',
    templateUrl: './todo.component.html',
    imports: [ TodoListComponent ],
})
export class ToDo {
    
}