import { Component } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'atd-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css',
    imports: [ NgFor, TodoItemComponent, FormsModule ],
})
export class TodoListComponent {

    todos: Todo[] = [
      {id: 0, title: 'Do it', completed: false},
      {id: 1, title: 'Teehee', completed: true},
      {id: 2, title: 'Augh', completed: false},
    ];
  
    newTodoText: string = '';

    getHighestId() {
      if (this.todos.length === 0) {
        return 0;
      }
      return Math.max(...this.todos.map(i => i.id))
    }

    addTodo() {
      if (this.newTodoText === '') {
        console.warn('Cannot enter empty ToDo item');
        return
      }
      let newId = this.getHighestId() + 1;
      this.todos.push({id: newId, title: this.newTodoText, completed: false})
      this.newTodoText = '';
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