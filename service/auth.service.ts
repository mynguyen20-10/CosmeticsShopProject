import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model'

@Injectable()
export class AuthenticationService {

  user: User;
  constructor(private http: HttpClient) {
  }
  baseURL = "http://localhost:3000/accounts"

  signin(email: string, password: string) {
    return this.http.get(this.baseURL + "?email=" + email + "&password=" + password)
    .pipe(map((users: User[]) => {
      if (users.length > 0) {
        this.user = users[0]
      }
      return users.length > 0
    }))
  }

  signup(email: string, password: string, firstName: string, lastName: string, avatar: string) {
    let id = Math.floor(Math.random() * 10 + 100)
    let fuser = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      avatar: avatar
    }
    return this.http.post(this.baseURL, JSON.stringify(fuser))
    .pipe(map((user: User) => {
      if (user) {
        this.user = user
        return true
      }
      return false
    }));
  }

  signout() {
    this.user = null
  }
}
