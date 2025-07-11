import { inject, Injectable, signal } from '@angular/core';
import { IAuthResponse, IUser } from '../models/auth.model';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { ApiService } from '../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiService = inject(ApiService);
  private router = inject(Router);

  // Reactive signal for user session
  user = signal<IAuthResponse | null>(null);

  /**
   * To check if the user is signed in.
   * This will return the user details if the user is logged in.
   * @returns 
   */
  isSignedIn() {
    return this.user() !== null;
  }

  /**
   * To sign in a user using email and password.
   * @param body 
   * @returns 
   */
  signIn(body: IUser) {
    return this.apiService.post('auth/sign-in/email', body);
  }

  /**
   * To sign up a user using name, email and password.
   * @param body 
   * @returns 
   */
  signUp(body: IUser) {
    return this.apiService.post('auth/sign-up/email', body);
  }

  /**
   * To get the current session of the user.
   * This will return the user details if the user is logged in.
   * @returns 
   */
  getSession(): any {
    return this.apiService.get<IAuthResponse>('auth/get-session').pipe(
      tap((user) => {
        this.user.set(user)
      }),
      catchError(() => {
        this.user.set(null);
        return of(null);
      })
    )
  }

  /**
   * To sign out the user.
   * @returns 
   */
  signOut() {
    this.apiService.post('auth/sign-out', {}).subscribe(() => {
      this.user.set(null);
      this.router.navigate(['auth/signin']);
    });
  }
}