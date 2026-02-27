import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCard } from './components/user-card/user-card';
import { UserBio } from './components/user-bio/user-bio';
import { UserStatus } from "./components/user-status/user-status";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    UserCard,
    //UserStatus,
    UserBio,
    UserStatus
],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}