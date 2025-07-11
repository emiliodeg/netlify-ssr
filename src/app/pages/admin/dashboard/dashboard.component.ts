import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  private authService = inject(AuthService);
  signOut() {
    this.authService.signOut();
  }

}
