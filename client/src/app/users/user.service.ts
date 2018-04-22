import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxJs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxJs/observable/of';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
    }

    // fbLogin(): Observable<Object> {
    //     return this.http.get('//localhost:3000/auth/facebook')
    //         .subscribe(
    //             (success) => {
    //                 console.log('success');
    //                 console.log(success);
    //             }
    //         );
    // }

    // logout() {
    //     localStorage.removeItem('id_token');
    // }

    isLoggedIn(): Promise<boolean> {
        return of(true).toPromise();
    }

    // isLoggedIn() {
    //     return new Promise((resolve, reject) => {
    //         this.getCurrentUser().then(user => resolve(true)).catch(() => reject(false));
    //     });
    // }

    // getCurrentUser() {
    //     return new Promise((resolve, reject) => {
    //         return this.http.get('//localhost:3000/api/v1/auth/me')
    //             .toPromise()
    //             .then(response => {
    //                 resolve(response.json());
    //             })
    //             .catch(() => reject());
    //     });
    // }
}
