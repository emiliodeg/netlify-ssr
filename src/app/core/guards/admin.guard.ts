import { CanMatchFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { map } from 'rxjs';

export const adminGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);



  if (isPlatformBrowser(platformId)) {
    // Build the full path from segments
    // const returnUrl = '/';
    const returnUrl = '/' + segments.map(s => s.path).join('/');
    console.log('Attempted URL:', returnUrl);
    if (authService.isSignedIn()) {
      return true;
    }
    return authService.getSession().pipe(
      map(user => user ? true : router.createUrlTree(['/auth/signin'], { queryParams: { returnUrl } }))
    );
  }
};
