import { Component } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'atd-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css',
    imports: [ NgFor, NgIf, TodoItemComponent, FormsModule ],
})
export class TodoListComponent {

    todos: Todo[] = [];
  
    newTodoText: string = '';
    newTodoError: boolean = false;

    getHighestId() {
      if (this.todos.length === 0) {
        return 0;
      }
      return Math.max(...this.todos.map(i => i.id))
    }

    addTodo() {
      if (this.newTodoText === '') {
        console.warn('Cannot enter empty ToDo item');
        this.newTodoError = true;
        return
      }
      let newId = this.getHighestId() + 1;
      this.todos.push({id: newId, title: this.newTodoText, completed: false})
      this.newTodoText = '';
      this.newTodoError = false;
    }
  
    toggleTodo(id: number) {
      let todoItem = this.todos.find(i => i.id === id);
      if (todoItem == undefined) {
        console.error('Cannot toggle nonexistent item');
        return;
      }
      todoItem.completed = !todoItem.completed;
    }
  
  
    deleteTodo(id: number) {
      this.todos = this.todos.filter(i => i.id !== id);
    }

}