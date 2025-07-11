import { Component, inject, signal, computed, effect } from '@angular/core';
import { TodosService, Todo } from '../../../services/todos.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todos.component.html'
})
export class TodosComponent {
  private todosService = inject(TodosService);
  private fb = inject(FormBuilder);

  todos = signal<Todo[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  editingId = signal<number | null>(null);

  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['']
  });

  constructor() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.loading.set(true);
    this.todosService.getTodos().subscribe({
      next: (todos) => {
        this.todos.set(todos);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load todos');
        this.loading.set(false);
      }
    });
  }

  addTodo() {
    if (this.form.invalid) return;
    this.loading.set(true);
    this.todosService.createTodo(this.form.value).subscribe({
      next: (todo) => {
        this.todos.set([...this.todos(), todo]);
        this.form.reset();
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to add todo');
        this.loading.set(false);
      }
    });
  }

  editTodo(todo: Todo) {
    this.editingId.set(todo.id);
    this.form.patchValue({ title: todo.title, description: todo.description });
  }

  updateTodo() {
    const id = this.editingId();
    if (!id || this.form.invalid) return;
    this.loading.set(true);
    this.todosService.updateTodo(id, this.form.value).subscribe({
      next: (updated) => {
        this.todos.set(this.todos().map(t => t.id === id ? updated : t));
        this.editingId.set(null);
        this.form.reset();
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to update todo');
        this.loading.set(false);
      }
    });
  }

  deleteTodo(id: number) {
    this.loading.set(true);
    this.todosService.deleteTodo(id).subscribe({
      next: () => {
        this.todos.set(this.todos().filter(t => t.id !== id));
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to delete todo');
        this.loading.set(false);
      }
    });
  }

  toggleComplete(todo: Todo) {
    this.todosService.updateTodo(todo.id, { completed: !todo.completed }).subscribe({
      next: (updated) => {
        this.todos.set(this.todos().map(t => t.id === todo.id ? updated : t));
      }
    });
  }

  cancelEdit() {
    this.editingId.set(null);
    this.form.reset();
  }
}
