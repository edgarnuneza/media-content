import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, public router: Router) { }

  create(user: any) {
    return this.http.post("https://thewebgun.com/user", user);
  }

  get() {
    return this.http.get("https://thewebgun.com/users");
  }
  getImages() {
    return this.http.get("https://thewebgun.com/files");
  }

}
