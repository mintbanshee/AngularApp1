import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

// the main user card component
@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard { 

  User!: User;

  // whenever the user changes their data, update the component
  constructor(private userService: UserService){
    this.userService.user$.subscribe(u => this.User = u);
    }

  }

