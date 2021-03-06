import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AnonymousGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkLogin();
    }

    checkLogin(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.userService.isLoggedIn().then(() => {
                this.router.navigate(['/search']);
                reject(false);
            }).catch(() => {
                resolve(true);
            });
        });
    }
}
