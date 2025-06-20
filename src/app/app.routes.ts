import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { Supabase } from './supabase';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home'),
    resolve: {
      data: () => {
        const dataService = inject(Supabase);
        return dataService.getTests(); // Fetch user data
      },
    },
  },
];
