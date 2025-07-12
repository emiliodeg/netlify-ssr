import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-admin-sidebar',
  imports: [RouterLink],
  templateUrl: './admin-sidebar.component.html'
})
export class AdminSidebarComponent {
  authService = inject(AuthService);
  user = this.authService.user;

  signOut() {
    this.authService.signOut();
  }
}
