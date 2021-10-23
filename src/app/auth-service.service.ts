import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  path: string = "https://thewebgun.com";


  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, public router: Router) {

  }

  login(userName: string, password: string) {
    return this.http.post("https://thewebgun.com/sign", { "userName": userName, "password": password });
  }

  isAuth(): boolean {
    const token = localStorage.getItem('token')!;

    if (this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')) {
      return false;
    }
    return true;
  }

  closeSesion() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
