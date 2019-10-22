import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../model/user.model";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:4200/user-portal/users';

  getUsers() {
    return new Promise(resolve => {
      resolve(JSON.parse(localStorage.getItem('users')));
    })
  }

  createUser(user: User) {
    return new Promise(resolve => {
      let data = JSON.parse(localStorage.getItem('users'));
      user.id = data.length;
      data.push(user);
      localStorage.setItem('users', JSON.stringify(data));
      resolve('')
    })
  }

  updateUser(user: User) {
    console.log(user);
    
    return new Promise(resovle => {
      let data = JSON.parse(localStorage.getItem('users')).map((u, i) => {
        if (u.id == user.id)
          return user;
        return u;
      })
      resovle(data);
    })
  }

  deleteUser(id: number) {
    return new Promise(resovle => {
      let data = JSON.parse(localStorage.getItem('users'));
      console.log(data);

      data.forEach((user, index) => {
        if (user.id == id)
          data.splice(index, 1);
      })
      resovle(data);
    })
  }
}
