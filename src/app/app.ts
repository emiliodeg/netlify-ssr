import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { from } from 'rxjs';
import { Supabase } from './supabase';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'netlify-ssr';

  #supabase = inject(Supabase);

  protected data = toSignal(from(this.#supabase.getTests()));
}
