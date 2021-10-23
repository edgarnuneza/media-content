import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  userName?: string;
  password?: string;

  constructor(private authService: AuthServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }


  login() {
    if (this.userName && this.password) {
      this.authService.login(this.userName, this.password).subscribe((res) => {
        console.log(res);
      }, (res) => {
        console.log("Fallo");
        console.log(res);
      });
    }
  }
}
