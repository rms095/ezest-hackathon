import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  userName: string;
  password: string;
  encryptedPassword: string;
  decryptedPassword: string;
  error: boolean = true;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  authenticateAndRedirect() {
    this.error = true;
    this.encryptedPassword = CryptoJS.AES.encrypt(this.password.trim(), "Test").toString();
    console.log(this.encryptedPassword);
    this.userService.getUser().forEach(res => {
        if(res.emailId === this.userName) {
          this.decryptedPassword = CryptoJS.AES.decrypt(this.encryptedPassword, "Test").toString(CryptoJS.enc.Utf8);
          if(this.decryptedPassword === res.password) {
            this.userService.setCurrentUser(res);
            this.router.navigate(['/myfootprint']);
          }
          else {
            this.error = false;
          }
        }
        else {
          this.error = false;
        }
      });
  }

}
