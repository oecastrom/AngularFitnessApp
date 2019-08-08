import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';

export class AuthService {

    authChange = new Subject<boolean>();
    private user: User;
    
    registerUser(authData: AuthData) : void {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authChange.next(true);
    }

    login(authData: AuthData) : void {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authChange.next(true);
    }

    logout() : void {
        this.user = null;
        this.authChange.next(false);
    }

    getUser() : User {
        // returns a new copy of the user object the ... operator spreads the properties of the old user object into this new copy of the user object
        // consequently the global user object is not manipulated within this class 
        return { ...this.user };
    }

    isAuth() : boolean {
        return this.user != null;
    }
}