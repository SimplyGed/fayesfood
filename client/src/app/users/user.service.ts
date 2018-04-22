import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxJs/add/operators/map';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
    }

    fbLogin() {
        this.http.get('//localhost:3000/auth/facebook')
            .subscribe(
                (success) => {
                    console.log('success');
                    console.log(success);
                }
            );
    }

    logout() {
        localStorage.removeItem('id_token');
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
