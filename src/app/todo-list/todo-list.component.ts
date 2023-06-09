import { Component } from '@angular/core';

interface Todo {
  title: string;
  completed: boolean;
}

interface CompletedTodo{
  title:string;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodo: string = '';
  ctodos:CompletedTodo[]=[];

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ title: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}