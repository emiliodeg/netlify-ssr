import { inject, Injectable } from '@angular/core';
import { Api } from '../core/api';
import { ISignin, ISignup } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = inject(Api);

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
  getSession() {
    return this.api.get('auth/session');
  }

  /**
   * To sign out the user.
   * @returns 
   */
  signOut() {
    return this.api.post('auth/sign-out', {});
  }
}
