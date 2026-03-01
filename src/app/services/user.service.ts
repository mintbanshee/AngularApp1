import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // user information 
    private userData: User = {
        name: 'Alexandria McQueen',
        age: 39,
        email: 'myemailaddress@gmail.com',
        role: 'Student',
        bio: ' An aspiring developer who values structure, creativity, and continuous growth. I enjoy building polished interfaces and learning how different parts of an application work together. ',
        isOnline: false,
        profilePicture: 'assets/ProfilePic.jpg'
    };
    // remember and update user information if changes made
private userSubject = new BehaviorSubject<User> ( this.userData);
user$ = this.userSubject.asObservable();

toggleStatus() {
    this.userData.isOnline = !this.userData.isOnline;
    this.userSubject.next({...this.userData});
}

// edit bio is a new string, if new bio string entered - update it. 
updateBio(newBio: string){
    this.userData.bio = newBio;
    this.userSubject.next({...this.userData});

}

}