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

  addTodo() {
    this.todos.push(this.todoText);
    localStorage.setItem('todos', JSON.stringify(this.todos));

  }

}
