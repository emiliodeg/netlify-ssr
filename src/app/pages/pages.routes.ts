import { Routes } from '@angular/router';
import { guestGuard } from '../core/guards/guest.guard';
import { adminGuard } from '../core/guards/admin.guard';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) }
        ]
    },
    {
        path: 'auth',
        component: MainLayoutComponent,
        canMatch: [guestGuard],
        loadChildren: () => import('./auth/auth.routes').then(m => m.routes)
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        canMatch: [adminGuard],
        loadChildren: () => import('./admin/admin.routes').then(m => m.routes)
    },
    {
        path: '**',
        redirectTo: ''
    }
];