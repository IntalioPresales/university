import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      if (this.login.username == "student") {
        this.router.navigateByUrl('/citizen/citizen-home');
      } else if (this.login.username == "employee") {
        this.router.navigateByUrl('/inspector/home');
      }
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
