import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  path: string = "https://thewebgun.com";

  constructor(private http: HttpClient) {

  }

  login(userName: string, password: string) {
    let sendData = JSON.stringify({ "userName": userName, "password": password });

    return this.http.post<any>("https://thewebgun.com/sing", sendData);
  }

}
