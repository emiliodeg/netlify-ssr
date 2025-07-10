import { Routes } from '@angular/router';
import { authGuard } from '../core/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About)
    },
    {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.routes)
    },
    {
        path: '**',
        redirectTo: ''
    }
];