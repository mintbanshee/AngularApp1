import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStatusService } from '../../services/user-status.server';

// status component 
@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-status.html',
  styleUrls: ['./user-status.scss'],
})
export class UserStatus {
  // Inject UserStatusService to manage status and visibility
  constructor(private userStatusService: UserStatusService) {} 

 // find out if user is online
  get isOnline$() {
    return this.userStatusService.isOnline$;
  }

// find out if user status is visible or hidden 
  get showStatus$() {
    return this.userStatusService.showStatus$;
  }

  // toggles online/offline when clicked
  toggleStatus() {
    this.userStatusService.toggleStatus();
  }

  // toggles shown/hidden when clicked
  toggleVisibility() {
    this.userStatusService.toggleVisibility(); 
  }
}