import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    /**
     * if the user is already signed in, allow access to the route.
     */
    if (authService.isSignedIn()) {
        return true;
    }

    /**
     * If the user is not signed in, check the session.
     * If the session exists, allow access to the route.
     * If the session does not exist, redirect to the sign-in page with the return URL
     */
    return authService.getSession().pipe(
        map(user => user ? true : router.createUrlTree(['/auth/signin'], { queryParams: { returnUrl: state.url } }))
    );
};
