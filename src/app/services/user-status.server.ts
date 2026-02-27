import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UserStatusState {
  isOnline: boolean;
}

@Injectable({ providedIn: 'root' })
export class UserStatusService {
  private statusSubject = new BehaviorSubject<UserStatusState>({ isOnline: true });
  isOnline$ = this.statusSubject.asObservable();

  toggleStatus() {
    const current = this.statusSubject.value;
    this.statusSubject.next({ isOnline: !current.isOnline });
  }
}