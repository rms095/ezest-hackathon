import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-co2-header',
  templateUrl: './co2-header.component.html',
  styleUrls: ['./co2-header.component.scss']
})
export class Co2HeaderComponent implements OnInit {

  userName:string;
  constructor(private userService: UserService, private router: Router) {
    this.userName = userService.getCurrentUser().userName;
  }

  ngOnInit() {
  }

  logOut() {
    this.userService.clear();
    this.router.navigate(['/login']);
  }
}
