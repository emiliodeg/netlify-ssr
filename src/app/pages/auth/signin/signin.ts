import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signin.html'
})
export class Signin {
  form: FormGroup;
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  private fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.loading.set(true);
    this.error.set(null);
    // TODO: Connect to API
    setTimeout(() => {
      this.loading.set(false);
      // Simulate error for demo
      // this.error.set('Invalid credentials');
    }, 1200);
  }
}
