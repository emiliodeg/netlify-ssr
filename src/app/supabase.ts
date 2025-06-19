import { createClient } from '@supabase/supabase-js';
import { Injectable } from '@angular/core';
import { Database } from './database.types';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  #supabase = createClient<Database>(
    environment.supabase.databaseUrl,
    environment.supabase.anonKey
  );

  async getTests() {
    const { data } = await this.#supabase.from('test').select('*');

    return data
  }
}
