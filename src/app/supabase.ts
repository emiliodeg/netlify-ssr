import { createClient } from '@supabase/supabase-js';
import { Injectable } from '@angular/core';
import { Database } from './database.types';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  constructor() {
    const supabaseUrl = process.env['SUPABASE_DATABASE_URL'];
    const supabaseAnonKey = process.env['SUPABASE_ANON_KEY'];

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase environment variables.');
    }

    const supabase = createClient<Database>(
      supabaseUrl,
      supabaseAnonKey
    );

    supabase
      .from('test')
      .select('*')
      .then((response) => {
        if (response.error) {
          console.error('Error fetching data:', response.error);
        } else {
          console.log('Data fetched successfully:', response.data);
        }
      });
  }
}
