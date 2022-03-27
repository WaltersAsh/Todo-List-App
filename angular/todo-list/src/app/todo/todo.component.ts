import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: string[] = [];
  todoText: string = '';

  constructor() { }

  ngOnInit(): void {
    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos as string) || [];
  }

  addTodo(): void {
    this.todos.push(this.todoText);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(todoToBeRemoved: string): void {
    //this.todos = this.todos.filter(todo => todo !== todoText);
    
    let i: number;
    for (i = 0; i < this.todos.length; i++) {
      if (this.todos[i] === todoToBeRemoved) {
        this.todos.splice(i, 1);
      }
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  completeTodo(todoToBeCompleted: string): void {
    let i: number;
    for (i = 0; i < this.todos.length; i++) {
      if (this.todos[i] === todoToBeCompleted) {
        this.todos[i] = this.todos[i].split('')
                                     .map(char => char + '\u0336')
                                     .join('');      
      }
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  clearAllTodos(): void {
    localStorage.clear();
    this.todos = [];
  }

  clearTextbox(): void {
    this.todoText = '';
  }
}
