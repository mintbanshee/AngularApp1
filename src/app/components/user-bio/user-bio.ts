import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

// user bio component 
@Component({
  selector: 'app-user-bio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-bio.html',
  styleUrls: ['./user-bio.scss'],
})
export class UserBio { 

  editing = false;
  newBio: string = '';

  constructor(private userService: UserService) {}

  get user$() {
    return this.userService.user$;
  }

  // enter edit mode with the current bio preloaded in the textarea 
  startEdit(user: User) {
    this.editing = true;
    this.newBio = user.bio;
  }

  // goes back to the bio and does not save 
  cancelEdit(user: User) {
    this.editing = false;
    this.newBio = user.bio;
  }

  // saves updated bio without extra spaces and exits edit mode 
  saveBio() {
    const trimmed = this.newBio.trim();
    this.userService.updateBio(trimmed);
    this.editing = false;
  }
}