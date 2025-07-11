import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-admin-sidebar',
  imports: [RouterLink, JsonPipe],
  templateUrl: './admin-sidebar.component.html'
})
export class AdminSidebarComponent {
  authService = inject(AuthService);
  user = this.authService.user;

  value = signal('Hello, Admin!');

  ngOnInit() {
    console.log('component in it', this.user());
  }

  signOut() {
    this.authService.signOut();
  }
}
