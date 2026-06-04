import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TaskComponent } from './task/task';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, TaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-frontend');
}