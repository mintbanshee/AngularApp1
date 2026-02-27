import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStatusService } from '../../services/user-status.server';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-status.html',
  styleUrls: ['./user-status.scss'],
})
export class UserStatus {
  constructor(private userStatusService: UserStatusService) {}

  // ✅ Getter runs only when template accesses it (after DI is ready)
  get isOnline$() {
    return this.userStatusService.isOnline$;
  }

  toggle() {
    this.userStatusService.toggleStatus();
  }
}