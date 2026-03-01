export interface User{
    name: string;
    age: number;
    email: string;
    role: 'Student' | 'Instructor' | 'Admin';
    bio: string;
    isOnline: boolean;
    profilePicture: string;

}
