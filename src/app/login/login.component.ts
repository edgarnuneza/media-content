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
    if (this.authService.isAuth()) {
      this.router.navigate(['aplication']);
    }
  }


  login() {
    if (this.userName && this.password) {
      this.authService.login(this.userName, this.password).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['aplication']);
      }, (res) => {
        console.log("Fallo");
        console.log(res);
      });
    }
  }
}
