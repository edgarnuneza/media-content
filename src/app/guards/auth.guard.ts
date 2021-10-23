import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthServiceService, public router: Router) {

  }

  canActivate(): boolean {

    if (!this.authService.isAuth()) {
      console.log('Token no válido');
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }


}
