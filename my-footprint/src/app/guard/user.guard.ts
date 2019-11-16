import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../shared/services/user.service";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // this.userService.setCurrentUser(  {
    //   "userName": "Deepak",
    //   "emailId": "deepak-madan.more@db.com",
    //   "contactNo": "94203900950",
    //   "city": "Pune",
    //   "role": "admin"
    // });
    // return true;
    //
    if(this.userService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
