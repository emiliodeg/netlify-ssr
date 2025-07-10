import { inject, Injectable, signal } from '@angular/core';
import { Api } from '../core/api';
import { ISignin, ISignup, User } from '../models/auth.model';
import { Router } from '@angular/router';
import { catchError, defer, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = inject(Api);
  private router = inject(Router);
  private http = inject(HttpClient); // Using the HttpClient from Api service

  // Reactive signal for user session
  user = signal<User | null>(null);

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
  signIn(body: ISignin) {
    return this.api.post('auth/sign-in/email', body);
  }

  /**
   * To sign up a user using name, email and password.
   * @param body 
   * @returns 
   */
  signUp(body: ISignup) {
    return this.api.post('auth/sign-up/email', body);
  }

  /**
   * To get the current session of the user.
   * This will return the user details if the user is logged in.
   * @returns 
   */
  getSession(): any {
    return defer(() =>
      this.api.get<User>('auth/get-session').pipe(
        tap((user) => this.user.set(user)),
        catchError(() => {
          this.user.set(null);
          return of(null);
        })
      )
    );
  }

  /**
   * To sign out the user.
   * @returns 
   */
  signOut() {
    this.api.post('auth/sign-out', {}).subscribe(() => {
      this.user.set(null);
      this.router.navigate(['auth/signin']);
    });;
  }
}