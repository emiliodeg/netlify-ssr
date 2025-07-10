import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  private authService = inject(AuthService);
  signOut() {
    this.authService.signOut();
  }
}
