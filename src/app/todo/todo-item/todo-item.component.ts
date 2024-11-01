import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../shared/todo.model";
import { NgClass } from "@angular/common";

@Component({
  standalone: true,
  selector: 'atd-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  imports: [ NgClass ],
})
export class TodoItemComponent {

  @Input() todo: Todo;
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  toggleCompletion(id: number) {
    this.toggle.emit(id);
  }

  deleteItem(id: number) {
    this.delete.emit(id);
  }
}