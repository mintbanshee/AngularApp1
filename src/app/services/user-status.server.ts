import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UserStatusState {
  isOnline: boolean;
}
export interface UserStatusVisibility {
  showStatus: boolean; // added to add a toggle for show or hide online status 
}

// have one shared instance
// remember current state and update changes
// status is read only outside of the service to avoid mutation 
@Injectable({ providedIn: 'root' })
export class UserStatusService {
  private statusSubject = new BehaviorSubject<UserStatusState>({ isOnline: true });
  private visibilitySubject = new BehaviorSubject<UserStatusVisibility>({ showStatus: true });
  isOnline$ = this.statusSubject.asObservable();
  showStatus$ = this.visibilitySubject.asObservable();

  toggleStatus() {
    const current = this.statusSubject.value;
    this.statusSubject.next ({ isOnline: !current.isOnline });
  }
  toggleVisibility() {
    const current = this.visibilitySubject.value;
    this.visibilitySubject.next ({ showStatus: !current.showStatus });
  }
}