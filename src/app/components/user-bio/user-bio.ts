import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

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

  // ✅ OPTION 2 — Getter (no initialization order issue)
  get user$() {
    return this.userService.user$;
  }

  startEdit(user: User) {
    this.editing = true;
    this.newBio = user.bio;
  }

  cancelEdit(user: User) {
    this.editing = false;
    this.newBio = user.bio;
  }

  saveBio() {
    const trimmed = this.newBio.trim();
    this.userService.updateBio(trimmed);
    this.editing = false;
  }
}