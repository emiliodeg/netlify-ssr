import { Routes } from '@angular/router';
import { guestGuard } from '../core/guards/guest.guard';
import { adminGuard } from '../core/guards/admin.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'auth',
        canMatch: [guestGuard],
        loadChildren: () => import('./auth/auth.routes').then(m => m.routes)
    },
    {
        path: 'admin',
        canMatch: [adminGuard],
        loadChildren: () => import('./admin/admin.routes').then(m => m.routes)
    },
    {
        path: '**',
        redirectTo: ''
    }
];