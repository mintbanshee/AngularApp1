import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userData: User = {
        name: 'Alexandria McQueen',
        age: 39,
        bio: ' Something about yourself ',
        isOnline: false,
        profilePicture: 'assets/ProfilePic.jpg'
    };
private userSubject = new BehaviorSubject<User> ( this.userData);
user$ = this.userSubject.asObservable();

toggleStatus() {
    this.userData.isOnline = !this.userData.isOnline;
    this.userSubject.next({...this.userData});
}

updateBio(newBio: string){
    this.userData.bio = newBio;
    this.userSubject.next({...this.userData});

}

}