import { Routes } from '@angular/router';
import { ToDo } from './todo/todo.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'todo' },
    { path: 'todo', component: ToDo },
];
