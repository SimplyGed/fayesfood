import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor(private http: AuthHttp) {
        FB.init({
            appId: '480340372368882',
            status: false,
            cookie: false,
            xfbml: false,
            version: 'v2.8'
        });
    }

    fbLogin() {
        return new Promise((resolve, reject) => {
            FB.login(result => {
                if (result.authResponse) {
                    return this.http.post('http://localhost:4200/api/v1/auth/facebook', { access_token: result.authResponse.accessToken })
                        .toPromise()
                        .then(response => {
                            const token = response.headers.get('x-auth-token');
                            if (token) {
                                localStorage.setItem('id_token', token);
                            }
                            resolve(response.json());
                        })
                        .catch(() => reject());
                } else {
                    reject();
                }
            }, { scope: 'public_profile.email' });
        });
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    isLoggedIn() {
        return new Promise((resolve, reject) => {
            this.getCurrentUser().then(user => resolve(true)).catch(() => reject(false));
        });
    }

    getCurrentUser() {
        return new Promise((resolve, reject) => {
            return this.http.get('http://localhost:4200/api/v1/auth/me').toPromise().then(response => {
                resolve(response.json());
            })
                .catch(() => reject());
        });
    }
}
