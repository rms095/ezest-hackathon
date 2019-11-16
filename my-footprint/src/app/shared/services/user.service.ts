import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "ngx-webstorage";
import {User} from "../../models/User";
import {Observable} from "rxjs";
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,
              private localStorage: LocalStorageService,) {
  }

  getUser(): User[] {
    // return this.httpClient.get<any>('./assets/mock-data/user-mock.json');
    return [
      {
        "userName": "Deepak",
        "emailId": "deepakmore@outlook.com",
        "contactNo": "94203900950",
        "city": "Pune",
        "role": "user",
        "password":"deepak"
      },
      {
        "userName": "Gaurav",
        "emailId": "gaurav.aras@db.com",
        "contactNo": "94203900950",
        "city": "Pune",
        "role": "user",
        "password":"gaurav"
      },
      {
        "userName": "Amar",
        "emailId": "amar-shrikant.sonwani@db.com",
        "contactNo": "94203900950",
        "city": "Pune",
        "role": "user",
        "password":"amar"
      }
    ]
  }

  isUserLoggedIn(): boolean {
    return !!this.localStorage.retrieve('user');
  }

  setCurrentUser(user) {
    this.localStorage.store('user', user);
  }

  clear() {
    this.localStorage.clear('user');
  }

  getCurrentUser(): User {
    return this.localStorage.retrieve('user');
  }
}
