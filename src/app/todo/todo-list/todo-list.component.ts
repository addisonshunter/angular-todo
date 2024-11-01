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
    // Helper function to create a new ID for new To-Do items.
    // If there are no items, the highest ID is 0.
    if (this.todos.length === 0) {
      return 0;
    }
    // If there are items, find the highest existing ID and return it.
    return Math.max(...this.todos.map(i => i.id))
  }

  addTodo() {
    // Add a new To-Do Item
    // If there is no text for the to-do, display error text.
    if (this.newTodoText === '') {
      console.warn('Cannot enter empty ToDo item');
      this.newTodoError = true;
      return
    }
    // New To-Do Item's Id is the highest seen ID + 1
    let newId = this.getHighestId() + 1;
    this.todos.push({ id: newId, title: this.newTodoText, completed: false })
    // Reset To-Do text and error text if displayed.
    this.newTodoText = '';
    this.newTodoError = false;
  }

  toggleTodo(id: number) {
    // Find and toggle To-Do item, if it exists.
    let todoItem = this.todos.find(i => i.id === id);
    if (todoItem == undefined) {
      console.error('Cannot toggle nonexistent item');
      return;
    }
    todoItem.completed = !todoItem.completed;
  }


  deleteTodo(id: number) {
    // Find and delete To-Do item, if it exists.
    this.todos = this.todos.filter(i => i.id !== id);
  }

}