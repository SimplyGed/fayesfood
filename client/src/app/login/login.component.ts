import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ff-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  fbLogin() {
    // this.userService.fbLogin().then(() => {
    //   console.log('User has been logged in');
    //   this.router.navigate(['/search']);
    // })
  }
}
